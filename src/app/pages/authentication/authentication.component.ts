import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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

  constructor() { }

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
