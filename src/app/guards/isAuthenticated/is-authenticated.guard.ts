import {Injectable, OnDestroy} from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth-state/auth.state";
import {AuthModel} from "../../state-management/auth-state/auth.model";

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate, OnDestroy {
  auth: AuthModel;
  subscription;

  constructor(private store: Store<AuthState>) {
    this.subscription = this.store.select("auth").subscribe(value => {
      this.auth = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.is_logged_in;
  }

}
