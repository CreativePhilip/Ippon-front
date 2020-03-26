import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth.state";
import * as AuthActions from "../../state-management/auth.actions"
import {AuthModel} from "../../models/auth/auth.model";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('loginBtt', {static: false}) loginBtt;
  @ViewChild('registerBtt', {static: false}) registerBtt;

  @ViewChild('loginForm', {static: false}) loginForm;
  @ViewChild('registrationForm', {static: false}) registrationForm;


  auth:AuthModel;
  constructor(private store: Store<AuthState>) {
    store.select('auth')
      .subscribe(value => this.auth = value);
  }

  ngOnInit() {
  }

  loginClick(link) :void {
    if(!link.classList.contains("active-link")){
      this.loginBtt.nativeElement.classList.add("active-link");
      this.registerBtt.nativeElement.classList.remove("active-link");

      this.registrationForm.nativeElement.classList.add("notActive");
      this.loginForm.nativeElement.classList.remove("notActive");
    }
  }

  registerClick(link):void {
    if(!link.classList.contains("active-link")){
      this.registerBtt.nativeElement.classList.add("active-link");
      this.loginBtt.nativeElement.classList.remove("active-link");

      this.loginForm.nativeElement.classList.add("notActive");
      this.registrationForm.nativeElement.classList.remove("notActive");
    }
  }
}
