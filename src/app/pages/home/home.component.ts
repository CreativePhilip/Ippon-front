import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthState} from "../../state-management/auth-state/auth.state";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  is_logged$: boolean;

  constructor(private store: Store<AuthState>) {
    this.store.select('auth').subscribe(value => this.is_logged$ = value.is_logged_in)
  }

  ngOnInit() {
  }

}
