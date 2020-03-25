import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MinNavComponent } from './navbars/min-nav/min-nav.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinNavComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
