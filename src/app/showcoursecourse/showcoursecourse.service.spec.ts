import { TestBed } from '@angular/core/testing';

import { ShowcoursecourseService } from './showcoursecourse.service';

describe('ShowcoursecourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowcoursecourseService = TestBed.get(ShowcoursecourseService);
    expect(service).toBeTruthy();
  });
});
