import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth-state/auth.state";
import {DatabaseService} from "../../services/databaseConnection/database.service";
import {AuthService} from "../../services/auth-service/auth.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  is_logged$: boolean;
  username: string;

  subscription;

  constructor(private store: Store<AuthState>,
              private db: DatabaseService,
              ) {
  }

  ngOnInit() {
    this.subscription = this.store.select('auth').subscribe(value => this.handleUserChange(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  handleUserChange(token) {
    this.is_logged$ = token.is_logged_in;
    if(this.is_logged$){
      this.db.userData().subscribe(value => this.username = value.username)
    }
  }
}
