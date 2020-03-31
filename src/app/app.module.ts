import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./state-management/auth-state/auth.reducer";

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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TokenHandlerInterceptor} from "./services/token-handler-interceptor/token-handler-.interceptor";
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ProfileNavComponent } from './navbars/profile-nav/profile-nav.component';
import { ProfileDataComponent } from './pages/profile/profile-data/profile-data.component';
import { ProfileTournamentComponent } from './pages/profile/profile-tournament/profile-tournament.component';
import { ProfileStaffComponent } from './pages/profile/profile-staff/profile-staff.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinNavComponent,
    AuthenticationComponent,
    ProfileComponent,
    ProfileNavComponent,
    ProfileDataComponent,
    ProfileTournamentComponent,
    ProfileStaffComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      auth: authReducer
    }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenHandlerInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
