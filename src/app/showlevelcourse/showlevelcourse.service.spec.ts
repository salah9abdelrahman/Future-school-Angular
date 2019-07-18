import { TestBed } from '@angular/core/testing';

import { ShowlevelcourseService } from './showlevelcourse.service';

describe('ShowlevelcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowlevelcourseService = TestBed.get(ShowlevelcourseService);
    expect(service).toBeTruthy();
  });
});
