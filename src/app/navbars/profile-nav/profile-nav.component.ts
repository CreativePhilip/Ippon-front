import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {
  @ViewChild('tournaments') tournaments;
  @ViewChild('staff') staff;
  @ViewChild('profile') profile;

  @Output() selectedTabChange = new EventEmitter<number>();

  aList = [this.tournaments, this.staff, this.profile];
  constructor() { }

  ngOnInit(): void {
  }

  navElementClick(data) {
    this.clearSelectionClasses();

    switch (data) {
      case 0:
        this.tournaments.nativeElement.classList.add("nav-link--selected");
        break;
      case 1:
        this.staff.nativeElement.classList.add("nav-link--selected");
        break;
      case 2:
        this.profile.nativeElement.classList.add("nav-link--selected");
        break;
    }

    this.selectedTabChange.emit(data)
  }

  clearSelectionClasses() {
    this.tournaments.nativeElement.classList.remove("nav-link--selected");
    this.staff.nativeElement.classList.remove("nav-link--selected");
    this.profile.nativeElement.classList.remove("nav-link--selected");
  }
}
