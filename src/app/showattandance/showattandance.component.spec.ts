import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowattandanceComponent } from './showattandance.component';

describe('ShowattandanceComponent', () => {
  let component: ShowattandanceComponent;
  let fixture: ComponentFixture<ShowattandanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowattandanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowattandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
