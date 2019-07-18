import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcourseComponent } from './ourcourse.component';

describe('OurcourseComponent', () => {
  let component: OurcourseComponent;
  let fixture: ComponentFixture<OurcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
