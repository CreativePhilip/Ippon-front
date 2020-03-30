import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth-state/auth.state";
import {UserData} from "../../services/databaseConnection/models/userData";
import {DatabaseService} from "../../services/databaseConnection/database.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  is_logged$: boolean;
  username: string;

  constructor(private store: Store<AuthState>,
              private db: DatabaseService) {
    this.store.select('auth').subscribe(value => this.handleUserChange(value))
  }

  ngOnInit() {
  }

  handleUserChange(token) {
    this.is_logged$ = token.is_logged_in;
    if(this.is_logged$){
      this.db.userData().subscribe(value => this.username = value.username)
    }

  }

}
