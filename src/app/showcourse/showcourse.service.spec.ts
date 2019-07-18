import { TestBed } from '@angular/core/testing';

import { ShowcourseService } from './showcourse.service';

describe('ShowcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowcourseService = TestBed.get(ShowcourseService);
    expect(service).toBeTruthy();
  });
});
