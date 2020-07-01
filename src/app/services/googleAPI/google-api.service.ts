import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GoogleAPIService {

  googlePlacesDataEndpoint: string = "https://maps.googleapis.com/maps/api/place/details/json";
  constructor(private http: HttpClient) { }

  getPlaceInformation(id: string) {
    let data = new Headers();
    data.append("key", environment.googleApiKey);
    data.append("place_id", id);

    return this.http.get(`${this.googlePlacesDataEndpoint}?place_id=${id}&key=${environment.googleApiKey}`).toPromise();
  }
}
