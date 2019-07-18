import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlevelcourseComponent } from './showlevelcourse.component';

describe('ShowlevelcourseComponent', () => {
  let component: ShowlevelcourseComponent;
  let fixture: ComponentFixture<ShowlevelcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlevelcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlevelcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
