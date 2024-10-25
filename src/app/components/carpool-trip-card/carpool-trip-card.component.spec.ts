import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolTripCardComponent } from './carpool-trip-card.component';

describe('CarpoolTripCardComponent', () => {
  let component: CarpoolTripCardComponent;
  let fixture: ComponentFixture<CarpoolTripCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarpoolTripCardComponent]
    });
    fixture = TestBed.createComponent(CarpoolTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
