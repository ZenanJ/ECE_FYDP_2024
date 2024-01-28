import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAsDriverComponent } from './post-as-driver.component';

describe('PostAsDriverComponent', () => {
  let component: PostAsDriverComponent;
  let fixture: ComponentFixture<PostAsDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAsDriverComponent]
    });
    fixture = TestBed.createComponent(PostAsDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
