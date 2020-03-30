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
});
