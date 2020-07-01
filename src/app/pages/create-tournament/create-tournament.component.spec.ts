import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTournamentComponent } from './create-tournament.component';
import {} from "googlemaps";

describe('CreateTournamentComponent', () => {
  let component: CreateTournamentComponent;
  let fixture: ComponentFixture<CreateTournamentComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTournamentComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
