import {async, TestBed} from '@angular/core/testing';

import { TokenHandlerInterceptorInterceptor } from './token-handler-interceptor.interceptor';
import {provideMockStore} from "@ngrx/store/testing";
import {AuthModel} from "../../state-management/auth-state/auth.model";

describe('TokenHandlerInterceptorInterceptor', () => {
  let interceptor: TokenHandlerInterceptorInterceptor;
  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TokenHandlerInterceptorInterceptor, useValue: {}},
        provideMockStore({ initialState })
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    interceptor = TestBed.inject(TokenHandlerInterceptorInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
