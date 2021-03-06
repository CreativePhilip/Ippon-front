import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component"
import { AuthenticationComponent } from "./pages/authentication/authentication.component"
import {ProfileComponent} from "./pages/profile/profile/profile.component";
import {IsAuthenticatedGuard} from "./guards/isAuthenticated/is-authenticated.guard";
import {CreateTournamentComponent} from "./pages/create-tournament/create-tournament.component";
import {TournamentComponent} from "./pages/tournament/tournament.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: AuthenticationComponent },
  { path: "profile", component: ProfileComponent, canActivate: [IsAuthenticatedGuard] },
  { path: "create-tournament", component: CreateTournamentComponent, canActivate:[IsAuthenticatedGuard]},
  { path: "tournament/:id", component: TournamentComponent}
  // { path: "**", redirectTo: "/home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
