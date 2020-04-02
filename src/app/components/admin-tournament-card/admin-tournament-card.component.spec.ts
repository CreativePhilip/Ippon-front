import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTournamentCardComponent } from './admin-tournament-card.component';

describe('AdminTournamentCardComponent', () => {
  let component: AdminTournamentCardComponent;
  let fixture: ComponentFixture<AdminTournamentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTournamentCardComponent ]
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
