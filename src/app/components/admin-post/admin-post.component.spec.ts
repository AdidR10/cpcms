import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiPostComponent } from './admin-post.component';

describe('AdmiPostComponent', () => {
  let component: AdmiPostComponent;
  let fixture: ComponentFixture<AdmiPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmiPostComponent]
    });
    fixture = TestBed.createComponent(AdmiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
