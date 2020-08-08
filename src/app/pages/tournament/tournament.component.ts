import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../services/databaseConnection/database.service";
import {EventModel} from "../../services/databaseConnection/models/EventModel";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit
{
  tournamentDataIsValid: boolean;
  tournamentData: EventModel;
  dateDifferenceToTournamentStart: Date;
  mapLink;

  constructor(private db: DatabaseService, private route: ActivatedRoute)
  {
  }

  generateStaticMapLink(place: string)
  {
    this.mapLink = `https://maps.googleapis.com/maps/api/staticmap?center=${place}&zoom=14&size=300x300&key=AIzaSyBn9oy3QnE0fVD4718MUfhJTvWeI4ygKnY&markers=${place}`
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(value => // Load tournament ID from url parameter
    {
      this.db.tournament(value.id).subscribe(value => // Make request to backend with the param
      {
        this.tournamentDataIsValid = true;
        this.tournamentData = value;
        this.tournamentData.start_time = new Date(value.start_time);
        this.tournamentData.end_time = new Date(value.end_time);
        this.tournamentData.registration_start_time = new Date(value.registration_start_time);
        this.tournamentData.registration_end_time = new Date(value.registration_end_time);
        this.dateDifferenceToTournamentStart = new Date(this.tournamentData.start_time.getSeconds() - new Date().getSeconds());

        let query = {
          placeId: this.tournamentData.locationID,
          fields: ["formatted_address"]
        };
        // @ts-ignore
        new google.maps.places.PlacesService(document.getElementsByClassName('map')[0])
          .getDetails(query, (place, status) =>
          {
            this.generateStaticMapLink(place.formatted_address)
          });
      }, error => // Handle 404 error
      {
        this.tournamentDataIsValid = false;
        this.tournamentData = new class implements EventModel
        {
          name = "Sorry there is no tournament with this ID"
          description = "If you have been redirected here, notify the website that lead you here" +
            "If you have copied this link check if you have selected it in the entirety and try again.";
          icon = 'assets/404.png';
          banner = null;
          end_time = null;
          event_owner = null;
          has_started = null;
          id = null;
          locationID = null;
          registration_end_time=null;
          registration_is_open=null;
          registration_start_time=null;
          start_time=null;
        }
      });
    })

  }

}
