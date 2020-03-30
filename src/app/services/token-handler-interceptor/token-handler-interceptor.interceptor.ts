import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import {AuthState} from "../../state-management/auth-state/auth.state";
import {Store} from "@ngrx/store";
import {AuthModel} from "../../state-management/auth-state/auth.model";
import {AuthService} from "../auth-service/auth.service";


@Injectable()
export class TokenHandlerInterceptorInterceptor implements HttpInterceptor {
  private tokenUtils = new JwtHelperService();
  private authData: AuthModel;

  constructor(private store: Store<AuthState>,
              private authService: AuthService) {
    this.store.select('auth').subscribe(value => this.authData = value);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenUtils.isTokenExpired(this.authData.access) && this.authData.access != '') {
      this.authService.updateToken(this.authData.refresh)
    } else {
      return next.handle(request);
    }


  }
}
