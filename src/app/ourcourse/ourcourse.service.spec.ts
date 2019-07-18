import { TestBed } from '@angular/core/testing';

import { OurcourseService } from './ourcourse.service';

describe('OurcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurcourseService = TestBed.get(OurcourseService);
    expect(service).toBeTruthy();
  });
});
