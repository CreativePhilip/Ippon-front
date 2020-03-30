import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { AuthService } from './auth.service';

describe('AuthService', () => {
  const service: AuthService = TestBed.inject(AuthService);


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
  });


  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
