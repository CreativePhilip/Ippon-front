import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import {MinNavComponent} from "../../navbars/min-nav/min-nav.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {AuthModel} from "../../state-management/auth-state/auth.model";
import {AuthService} from "../../services/auth-service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  let store: MockStore;

  let authMock = {
    loginToServer(login: string, password: string) {},
    updateToken(refresh: string) {},
    registerWithServer(login: string, email: string,password: string) {},
  };

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent, MinNavComponent ],
      imports: [RouterTestingModule ],
      providers: [
        provideMockStore({ initialState }),
        { provide: AuthService, useValue: authMock},
        { provide: MatSnackBar, useValue: {} }
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {

  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call check if password and username is supplied and validate login form', function () {
    component.loginForm.patchValue({"username": "John"});
    component.loginForm.patchValue({"password": "asdasd123123"});

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should not validate login form if username is not supplied', function () {
    component.loginForm.patchValue({"username": ""});
    component.loginForm.patchValue({"password": "asdasd123123"});

    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should not validate login form if password is not supplied', function () {
    component.loginForm.patchValue({"username": "aaaaaaaaaa"});
    component.loginForm.patchValue({"password": ""});

    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate registration form', function () {
    component.registrationForm.patchValue({"username": "aaaaaa"});
    component.registrationForm.patchValue({"email": "aaaaaa@aaaa.com"});
    component.registrationForm.patchValue({"password": "asdasdasdas"});

    expect(component.registrationForm.valid).toBeTruthy();
  });

  it('should not validate registration form if username is not supplied', function () {
    component.registrationForm.patchValue({"username": ""});
    component.registrationForm.patchValue({"email": "aaaaaa@aaaa.com"});
    component.registrationForm.patchValue({"password": "asdasdasdas"});

    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('should not validate registration form if email is not supplied', function () {
    component.registrationForm.patchValue({"username": "aaaaaaaaa"});
    component.registrationForm.patchValue({"email": ""});
    component.registrationForm.patchValue({"password": "asdasdasdas"});

    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('should not validate registration form if password is not supplied', function () {
    component.registrationForm.patchValue({"username": "aaaaaaaaaa"});
    component.registrationForm.patchValue({"email": "aaaaaa@aaaa.com"});
    component.registrationForm.patchValue({"password": ""});

    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('should not validate registration form if email is not correct', function () {
    component.registrationForm.patchValue({"username": "aaaaaaaa"});
    component.registrationForm.patchValue({"email": "aaaaaaaaaa.com"});
    component.registrationForm.patchValue({"password": "asdasdasdas"});

    expect(component.registrationForm.valid).toBeFalsy();
  });
});
