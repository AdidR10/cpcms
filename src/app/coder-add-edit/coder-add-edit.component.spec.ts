import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderAddEditComponent } from './coder-add-edit.component';

describe('CoderAddEditComponent', () => {
  let component: CoderAddEditComponent;
  let fixture: ComponentFixture<CoderAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoderAddEditComponent]
    });
    fixture = TestBed.createComponent(CoderAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
