import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingContestComponent } from './upcoming-contest.component';

describe('UpcomingContestComponent', () => {
  let component: UpcomingContestComponent;
  let fixture: ComponentFixture<UpcomingContestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingContestComponent]
    });
    fixture = TestBed.createComponent(UpcomingContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
