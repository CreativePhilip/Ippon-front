import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';

export interface AuthResponse {
  refresh: string,
  access: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  loginToServer(login: string, password: string) {
    return this.http.post<AuthResponse>(`${this.rootUrl}auth/token`, {"username": login, "password": password});
  }

  updateToken(refresh: string) {
    return this.http.post(`${this.rootUrl}auth/token/refresh`, {"refresh": refresh});
  }

  registerWithServer(login: string, email: string,password: string) {
    return this.http.post(`${this.rootUrl}ippon/registration/`, {"username": login,"email": email, "password": password});
  }
}
