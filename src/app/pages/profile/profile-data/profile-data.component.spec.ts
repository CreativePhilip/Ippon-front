import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDataComponent } from './profile-data.component';
import {provideMockStore} from "@ngrx/store/testing";
import {AuthModel} from "../../../state-management/auth-state/auth.model";
import {RouterTestingModule} from "@angular/router/testing";

describe('ProfileDataComponent', () => {
  let component: ProfileDataComponent;
  let fixture: ComponentFixture<ProfileDataComponent>;

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProfileDataComponent ],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
