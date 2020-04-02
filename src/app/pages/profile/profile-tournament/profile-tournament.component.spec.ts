import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTournamentComponent } from './profile-tournament.component';
import {DatabaseService} from "../../../services/databaseConnection/database.service";
import {DatabaseServiceMock} from "../../../services/databaseConnection/database.service.mock";

describe('ProfileTournamentComponent', () => {
  let component: ProfileTournamentComponent;
  let fixture: ComponentFixture<ProfileTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTournamentComponent ],
      providers: [{provide: DatabaseService, useValue: DatabaseServiceMock},]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
