import { TestBed } from '@angular/core/testing';

import { DisplaystaffService } from './displaystaff.service';

describe('DisplaystaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaystaffService = TestBed.get(DisplaystaffService);
    expect(service).toBeTruthy();
  });
});
