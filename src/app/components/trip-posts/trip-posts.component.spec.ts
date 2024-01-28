import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPostsComponent } from './trip-posts.component';

describe('TripPostsComponent', () => {
  let component: TripPostsComponent;
  let fixture: ComponentFixture<TripPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripPostsComponent]
    });
    fixture = TestBed.createComponent(TripPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
