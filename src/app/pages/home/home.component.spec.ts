import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {AuthModel} from "../../state-management/auth-state/auth.model";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {DatabaseService} from "../../services/databaseConnection/database.service";
import {DatabaseServiceMock} from "../../services/databaseConnection/database.service.mock";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let store: MockStore;
  let fixture: ComponentFixture<HomeComponent>;


  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        provideMockStore({ initialState }),
        {provide: DatabaseService, useValue: DatabaseServiceMock}
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
