import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../../services/databaseConnection/database.service";
import {EventModel} from "../../../services/databaseConnection/models/EventModel";

@Component({
  selector: 'app-profile-tournament',
  templateUrl: './profile-tournament.component.html',
  styleUrls: ['./profile-tournament.component.scss']
})
export class ProfileTournamentComponent implements OnInit {
  tournaments: EventModel[];
  activeTournamentsCount = 0;
  upcomingTournamentsCount = 0;
  previousTournamentsCount = 0;



  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.db.userTournaments().subscribe((value: EventModel[]) => {
      this.tournaments = value;
      this.activeTournamentsCount = this.tournaments.length;
    });
  }

}
