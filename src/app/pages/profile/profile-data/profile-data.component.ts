import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../../state-management/auth-state/auth.state";
import * as AuthActions from "../../../state-management/auth-state/auth.actions";
import {Router} from "@angular/router";
import {DatabaseService} from "../../../services/databaseConnection/database.service";

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {

  name: string;
  email: string;

  constructor(private store: Store<AuthState>,
              private router: Router,
              private db: DatabaseService) { }

  ngOnInit(): void {
    this.db.userData().subscribe(value => {
      this.name = `${value.first_name} ${value.last_name}`;
      this.email = value.email;
    })
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigateByUrl("/home")
  }

}
