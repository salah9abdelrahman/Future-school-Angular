import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffevaluateComponent } from './staffevaluate.component';

describe('StaffevaluateComponent', () => {
  let component: StaffevaluateComponent;
  let fixture: ComponentFixture<StaffevaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffevaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffevaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
