import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth-state/auth.state";
import {AuthModel} from "../../state-management/auth-state/auth.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import * as AuthActions from "../../state-management/auth-state/auth.actions";

export interface AuthResponse {
  refresh: string,
  access: string
}

export interface TokenRefresh {
  access: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{
  rootUrl = environment.apiUrl;
  tokenCheck;
  auth: AuthModel;
  jwtHelper:JwtHelperService = new JwtHelperService();
  subscription;

  constructor(private http: HttpClient,
              private store: Store<AuthState>) {
    this.tokenCheck = setInterval(() => this.tokenRefresh(), 1000*60*4.5);

    // this.loadTokensFromLocalStorage();

    this.subscription = this.store.select('auth').subscribe(value => {
      this.auth = value;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.tokenCheck);
    this.subscription.unsubscribe();
  }

  loginToServer(login: string, password: string) {
    return this.http.post<AuthResponse>(`${this.rootUrl}auth/token`, {"username": login, "password": password});
  }

  updateToken(refresh: string) {
    return this.http.post<TokenRefresh>(`${this.rootUrl}auth/token/refresh`, {"refresh": refresh});
  }

  registerWithServer(login: string, email: string,password: string) {
    return this.http.post(`${this.rootUrl}ippon/registration/`, {"username": login,"email": email, "password": password});
  }

  tokenRefresh() {
    console.log("Token refresh");
    if(this.auth.is_logged_in && !this.jwtHelper.isTokenExpired(this.auth.refresh)) {
      this.updateToken(this.auth.refresh).subscribe(
        value => {
          console.log("dispatching actions");
          this.store.dispatch(new AuthActions.Login(
            {is_logged_in: true, refresh: this.auth.refresh, access: value.access}));},
        error => {console.log(error)}
      )
    }
  }

  saveTokensToLocalStorage(access: string, refresh: string) {
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
  }

  loadTokensFromLocalStorage(){
    console.log("loading tokens from storage");
    const a = localStorage.getItem("access");
    const r = localStorage.getItem("refresh");
    if(a != null && r != null && !this.jwtHelper.isTokenExpired(r)) {
      this.store.dispatch(new AuthActions.Login({is_logged_in: true, refresh: r, access: a}));
    }
  }
}
