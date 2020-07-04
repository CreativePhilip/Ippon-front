import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePreviewComponent } from './place-preview.component';

describe('PlacePreviewComponent', () => {
  let component: PlacePreviewComponent;
  let fixture: ComponentFixture<PlacePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
