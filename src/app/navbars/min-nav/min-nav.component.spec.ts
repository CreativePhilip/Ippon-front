import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinNavComponent } from './min-nav.component';

describe('MinNavComponent', () => {
  let component: MinNavComponent;
  let fixture: ComponentFixture<MinNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
