import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth-state/auth.state";
import * as AuthActions from "../../state-management/auth-state/auth.actions"
import {AuthModel} from "../../state-management/auth-state/auth.model";
import {AuthService} from "../../services/auth-service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('loginBtt') loginBtt;
  @ViewChild('registerBtt') registerBtt;

  @ViewChild('loginFormDiv') loginFormDiv;
  @ViewChild('registrationFormDiv') registrationFormDiv;

  loginForm: FormGroup;
  registrationForm: FormGroup;

  auth:AuthModel;
  constructor(private store: Store<AuthState>,
              private authService: AuthService,
              private router: Router,
              private errorBar: MatSnackBar) {
    this.store.select('auth')
      .subscribe(value => this.auth = value);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      keepLoggedIn: new FormControl(false, [])
    });

    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  hasErrorLogin (controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  hasErrorRegistration (controlName: string, errorName: string) {
    return this.registrationForm.controls[controlName].hasError(errorName);
  };

  login() {
    if (this.loginForm.valid){
      this.authService.loginToServer(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(
          value => {
            this.store.dispatch(new AuthActions.Login({
              is_logged_in: true,
              refresh: value.refresh,
              access: value.access}));
            this.router.navigateByUrl("/home");
          },
          error => {
            this.errorBar.open(`${error.error.detail} Please try again`, "Exit",{duration: 5000})
          }
        );
    }
  }

  register() {
    if(this.registrationForm.valid) {
      this.authService.registerWithServer(
        this.registrationForm.value.username,
        this.registrationForm.value.email,
        this.registrationForm.value.password
      )
        .subscribe(
          value => this.errorBar.open('Congratulations your account has been created successfully', "Exit",{duration: 5000}), // TODO: route to a registration confirmation page
          error => this.errorBar.open(`${error.error} Please try again`, "Exit",{duration: 5000})
        );
    }
  }

  loginClick(link) :void {
    if(!link.classList.contains("active-link")){
      this.loginBtt.nativeElement.classList.add("active-link");
      this.registerBtt.nativeElement.classList.remove("active-link");

      this.registrationFormDiv.nativeElement.classList.add("notActive");
      this.loginFormDiv.nativeElement.classList.remove("notActive");
    }
  }

  registerClick(link):void {
    if(!link.classList.contains("active-link")){
      this.registerBtt.nativeElement.classList.add("active-link");
      this.loginBtt.nativeElement.classList.remove("active-link");

      this.loginFormDiv.nativeElement.classList.add("notActive");
      this.registrationFormDiv.nativeElement.classList.remove("notActive");
    }
  }
}
