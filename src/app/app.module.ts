import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./state-management/auth.reducer";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MinNavComponent } from './navbars/min-nav/min-nav.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinNavComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      auth: authReducer
    }),

    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
