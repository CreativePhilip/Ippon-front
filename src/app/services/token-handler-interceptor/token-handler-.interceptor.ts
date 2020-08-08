import {Injectable, OnDestroy} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthState} from "../../state-management/auth-state/auth.state";
import {Store} from "@ngrx/store";
import {AuthModel} from "../../state-management/auth-state/auth.model";
import {environment} from "../../../environments/environment";


@Injectable()
export class TokenHandlerInterceptor implements HttpInterceptor, OnDestroy {
  private tokenUtils = new JwtHelperService();
  private authData: AuthModel;
  private subscription;

  constructor(private store: Store<AuthState>) {
    this.subscription = this.store.select('auth').subscribe(value => this.authData = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(environment.apiUrl))
      return next.handle(this.backendAPIInterception(request));
  }

  backendAPIInterception(request: HttpRequest<unknown>) {
    if(this.authData.access != null && !this.tokenUtils.isTokenExpired(this.authData.access)) {
      return request.clone({
        headers: request.headers
          .append("Authorization", `Bearer ${this.authData.access}`)
      });
    } else {
      return request;
    }
  }
}
