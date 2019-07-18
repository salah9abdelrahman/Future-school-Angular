import { TestBed } from '@angular/core/testing';

import { DisplaystudentService } from './displaystudent.service';

describe('DisplaystudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaystudentService = TestBed.get(DisplaystudentService);
    expect(service).toBeTruthy();
  });
});
