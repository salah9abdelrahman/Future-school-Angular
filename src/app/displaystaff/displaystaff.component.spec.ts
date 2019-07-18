import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystaffComponent } from './displaystaff.component';

describe('DisplaystaffComponent', () => {
  let component: DisplaystaffComponent;
  let fixture: ComponentFixture<DisplaystaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaystaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaystaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
