import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcoursecourseComponent } from './showcoursecourse.component';

describe('ShowcoursecourseComponent', () => {
  let component: ShowcoursecourseComponent;
  let fixture: ComponentFixture<ShowcoursecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcoursecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcoursecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
