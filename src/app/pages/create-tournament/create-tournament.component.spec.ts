import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTournamentComponent } from './create-tournament.component';
import {} from "googlemaps";
import {DatabaseService} from "../../services/databaseConnection/database.service";
import {DatabaseServiceMock} from "../../services/databaseConnection/database.service.mock";
import {RouterTestingModule} from "@angular/router/testing";

describe('CreateTournamentComponent', () => {
  let component: CreateTournamentComponent;
  let fixture: ComponentFixture<CreateTournamentComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CreateTournamentComponent ],
      providers: [
          { provide: DatabaseService, useClass: DatabaseServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
