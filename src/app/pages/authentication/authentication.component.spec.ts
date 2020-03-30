import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import {MinNavComponent} from "../../navbars/min-nav/min-nav.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {AuthModel} from "../../state-management/auth-state/auth.model";

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  let store: MockStore;

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent, MinNavComponent ],
      imports: [RouterTestingModule ],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
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
