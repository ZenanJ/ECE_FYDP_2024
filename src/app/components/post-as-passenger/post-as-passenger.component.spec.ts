import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAsPassengerComponent } from './post-as-passenger.component';

describe('PostAsPassengerComponent', () => {
  let component: PostAsPassengerComponent;
  let fixture: ComponentFixture<PostAsPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAsPassengerComponent]
    });
    fixture = TestBed.createComponent(PostAsPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
