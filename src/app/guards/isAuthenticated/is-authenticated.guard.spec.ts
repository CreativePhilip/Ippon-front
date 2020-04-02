import { TestBed } from '@angular/core/testing';

import { IsAuthenticatedGuard } from './is-authenticated.guard';
import {provideMockStore} from "@ngrx/store/testing";
import {AuthModel} from "../../state-management/auth-state/auth.model";

describe('IsAuthenticatedGuard', () => {
  let guard: IsAuthenticatedGuard;

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });
    guard = TestBed.inject(IsAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
