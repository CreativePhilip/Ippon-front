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
  private rootUrl = "http://192.168.8.102:8000";

  constructor(private http: HttpClient) { }


  loginToServer(login: string, password: string) {
    return this.http.post<AuthResponse>(`${this.rootUrl}/auth/token`, {"username": login, "password": password});
  }

  registerWithServer(login: string, email: string,password: string) {
    return this.http.post(`${this.rootUrl}/ippon/registration/`, {"username": login,"email": email, "password": password});
  }
}
