import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTripPageComponent } from './request-trip-page.component';

describe('RequestTripPageComponent', () => {
  let component: RequestTripPageComponent;
  let fixture: ComponentFixture<RequestTripPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestTripPageComponent]
    });
    fixture = TestBed.createComponent(RequestTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
