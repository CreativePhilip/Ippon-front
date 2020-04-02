import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTournamentCardComponent } from './admin-tournament-card.component';
import {MatMenuModule} from "@angular/material/menu";

describe('AdminTournamentCardComponent', () => {
  let component: AdminTournamentCardComponent;
  let fixture: ComponentFixture<AdminTournamentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTournamentCardComponent ],
      providers: [],
      imports: [
        MatMenuModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTournamentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
