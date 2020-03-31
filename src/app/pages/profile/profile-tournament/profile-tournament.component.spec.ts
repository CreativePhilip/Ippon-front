import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTournamentComponent } from './profile-tournament.component';

describe('ProfileTournamentComponent', () => {
  let component: ProfileTournamentComponent;
  let fixture: ComponentFixture<ProfileTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTournamentComponent ]
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
