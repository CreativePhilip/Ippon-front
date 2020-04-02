import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MinNavComponent} from "./navbars/min-nav/min-nav.component";
import {AuthService} from "./services/auth-service/auth.service";

describe('AppComponent', () => {

  let authMock = {
    loadTokensFromLocalStorage() {}
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MinNavComponent
      ],
      providers: [{provide: AuthService, useValue: authMock }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Ippon'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ippon');
  });
});
