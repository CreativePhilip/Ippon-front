import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../../state-management/auth-state/auth.state";
import * as AuthActions from "../../../state-management/auth-state/auth.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {

  constructor(private store: Store<AuthState>,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigateByUrl("/home")
  }

}
