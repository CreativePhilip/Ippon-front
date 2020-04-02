import { Component } from '@angular/core';
import {AuthService} from "./services/auth-service/auth.service";
import {NavigationEnd, Router} from "@angular/router";


declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ippon';

  constructor(private auth: AuthService,
              public router: Router) {
    this.auth.loadTokensFromLocalStorage();


    // Code responsible for sending google analytics events
    // required because angular is a one page app
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        gtag('config', 'UA-162249928-1', {'page_path': event.urlAfterRedirects});
      }
    } )
  }
}
