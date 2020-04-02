import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatabaseEndpoints} from "./databaseEndpoints";
import {UserData} from "./models/userData";
import {EventModel} from "./models/EventModel";



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  userData() {
    return this.http.get<UserData>(DatabaseEndpoints.userDataEndpoint, {})
  }

  userTournaments() {
    return this.http.get<EventModel[]>(DatabaseEndpoints.userTournamentsEndpoint, {})
  }
}
