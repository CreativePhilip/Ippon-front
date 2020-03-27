import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth.state";
import * as AuthActions from "../../state-management/auth.actions"
import {AuthModel} from "../../models/auth/auth.model";
import {AuthService} from "../../services/auth-service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class LoginForm {
  email:string;
  password: string;
}



@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('loginBtt', {static: false}) loginBtt;
  @ViewChild('registerBtt', {static: false}) registerBtt;

  @ViewChild('loginFormDiv', {static: false}) loginFormDiv;
  @ViewChild('registrationFormDiv', {static: false}) registrationFormDiv;

  loginForm: FormGroup;

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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    console.log(this.loginForm);
  }

  hasError (controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  login() {
    if (this.loginForm.valid){
      this.authService.loginToServer(
        this.loginForm.value.email,
        this.loginForm.value.password)
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
