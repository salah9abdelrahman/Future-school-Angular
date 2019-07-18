import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowclasscourseComponent } from './showclasscourse.component';

describe('ShowclasscourseComponent', () => {
  let component: ShowclasscourseComponent;
  let fixture: ComponentFixture<ShowclasscourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowclasscourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowclasscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
