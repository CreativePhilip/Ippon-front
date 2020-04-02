import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public childVisibilityState = {
    tournamentIsOn: true,
    profileIsOn: false,
    staffIsOn: false,
  };


  constructor() { }

  ngOnInit(): void {
  }

  handleTabChanges(data: number) {
    for (let x in this.childVisibilityState) {
      this.childVisibilityState[x] = false;
    }

    switch (data) {
      case 0:
        this.childVisibilityState.tournamentIsOn = true;
        break;
      case 1:
        this.childVisibilityState.staffIsOn = true;
        break;
      case 2:
        this.childVisibilityState.profileIsOn = true;
        break;
    }
  }

}
