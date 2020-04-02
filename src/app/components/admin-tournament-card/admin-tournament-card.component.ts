import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-tournament-card',
  templateUrl: './admin-tournament-card.component.html',
  styleUrls: ['./admin-tournament-card.component.scss']
})
export class AdminTournamentCardComponent implements OnInit {
  @Input() tournamentName: string;
  @Input() startDate: string;
  @Input() registrationEndDate: string;

  parsedStartDate;
  parsedRegistrationStartDate;
  constructor() { }

  ngOnInit(): void {
  this.parseTime();
  }

  parseTime() {
    this.parsedStartDate = new Date(this.startDate).toLocaleDateString();
    this.parsedRegistrationStartDate = new Date(this.registrationEndDate).toLocaleDateString();
  }

}



