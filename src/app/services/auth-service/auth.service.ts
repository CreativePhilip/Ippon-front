import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface AuthResponse {
  refresh: string,
  access: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  loginToServer(login: string, password: string) {
    return this.http.post<AuthResponse>("http://192.168.8.102:8000/auth/token", {"username": login, "password": password});
  }
}
