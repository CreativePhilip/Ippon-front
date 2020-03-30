import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatabaseEndpoints} from "./databaseEndpoints";
import {UserData} from "./models/userData";



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  userData() {
    return this.http.get<UserData>(DatabaseEndpoints.userDataEndpoint, {})
  }
}
