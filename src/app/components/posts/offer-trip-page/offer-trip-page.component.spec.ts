import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTripPageComponent } from './offer-trip-page.component';

describe('OfferTripPageComponent', () => {
  let component: OfferTripPageComponent;
  let fixture: ComponentFixture<OfferTripPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferTripPageComponent]
    });
    fixture = TestBed.createComponent(OfferTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
