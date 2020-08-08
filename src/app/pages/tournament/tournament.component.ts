import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/databaseConnection/database.service";
import {EventModel} from "../../services/databaseConnection/models/EventModel";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournamentData: EventModel;
  mapLink;
  constructor(private db:DatabaseService) { }

  generateStaticMapLink(place: string) {
    this.mapLink = `https://maps.googleapis.com/maps/api/staticmap?center=${place}&zoom=14&size=300x300&key=AIzaSyBn9oy3QnE0fVD4718MUfhJTvWeI4ygKnY&markers=${place}`
  }

  ngOnInit(): void {
    this.db.tournament(4).subscribe(value => {
      this.tournamentData = value;
      this.tournamentData.start_time = new Date(value.start_time);
      this.tournamentData.end_time = new Date(value.end_time);
      this.tournamentData.registration_start_time = new Date(value.registration_start_time);
      this.tournamentData.registration_end_time = new Date(value.registration_end_time);

      let query = {
        placeId: this.tournamentData.locationID,
        fields: ["formatted_address"]
      };
        // @ts-ignore
      new google.maps.places.PlacesService(document.getElementsByClassName('map')[0])
        .getDetails(query, (place, status)  => {
          this.generateStaticMapLink(place.formatted_address)
        });
    });
  }

}
