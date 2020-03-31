import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { AuthService } from './auth.service';
import {provideMockStore} from "@ngrx/store/testing";
import {AuthModel} from "../../state-management/auth-state/auth.model";

describe('AuthService', () => {
  let service: AuthService;

  const initialState: AuthModel = {
    is_logged_in: false,
    refresh: null,
    access: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService,
        provideMockStore({ initialState })]
    });

    service = TestBed.inject(AuthService);
  });


  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
