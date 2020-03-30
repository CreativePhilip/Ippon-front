import { TestBed } from '@angular/core/testing';

import { TokenHandlerInterceptorInterceptor } from './token-handler-interceptor.interceptor';

describe('TokenHandlerInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenHandlerInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenHandlerInterceptorInterceptor = TestBed.inject(TokenHandlerInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
