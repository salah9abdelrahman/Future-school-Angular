import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlevelComponent } from './showlevel.component';

describe('ShowlevelComponent', () => {
  let component: ShowlevelComponent;
  let fixture: ComponentFixture<ShowlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
