import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTripPageComponent } from './current-trip-page.component';

describe('CurrentTripPageComponent', () => {
  let component: CurrentTripPageComponent;
  let fixture: ComponentFixture<CurrentTripPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTripPageComponent]
    });
    fixture = TestBed.createComponent(CurrentTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
