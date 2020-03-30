import {async, TestBed} from '@angular/core/testing';

import { TokenHandlerInterceptor } from './token-handler-.interceptor';
import {provideMockStore} from "@ngrx/store/testing";
import {AuthModel} from "../../state-management/auth-state/auth.model";

describe('TokenHandlerInterceptorInterceptor', () => {
  let interceptor: TokenHandlerInterceptor;
  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TokenHandlerInterceptor, useValue: {}},
        provideMockStore({ initialState })
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    interceptor = TestBed.inject(TokenHandlerInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
