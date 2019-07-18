import { TestBed } from '@angular/core/testing';

import { ShowclasscourseService } from './showclasscourse.service';

describe('ShowclasscourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowclasscourseService = TestBed.get(ShowclasscourseService);
    expect(service).toBeTruthy();
  });
});
