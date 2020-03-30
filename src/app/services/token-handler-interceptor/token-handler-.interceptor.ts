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
export class TokenHandlerInterceptor implements HttpInterceptor {
  private tokenUtils = new JwtHelperService();
  private authData: AuthModel;

  constructor(private store: Store<AuthState>,
              private authService: AuthService) {
    this.store.select('auth').subscribe(value => this.authData = value);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authData.access != null) {
      const updatedRequest = request.clone({headers: request.headers.set("Authorization", `Bearer ${this.authData.access}`)});
      console.log("Interceptor test --- token append");
      return next.handle(updatedRequest);
    } else {
      console.log("Interceptor test --- no token append");
      return next.handle(request);
    }
  }
}
