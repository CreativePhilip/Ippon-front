import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from "../../services/databaseConnection/models/EventModel";

@Component({
  selector: 'app-admin-tournament-card',
  templateUrl: './admin-tournament-card.component.html',
  styleUrls: ['./admin-tournament-card.component.scss']
})
export class AdminTournamentCardComponent implements OnInit {
  @Input() tournament: EventModel;

  parsedStartDate;
  parsedRegistrationStartDate;
  constructor() { }

  ngOnInit(): void {
    this.parseTime();
  }

  parseTime() {
    this.parsedStartDate = new Date(this.tournament.start_time).toLocaleDateString();
    this.parsedRegistrationStartDate = new Date(this.tournament.registration_end_time).toLocaleDateString();
  }

}



