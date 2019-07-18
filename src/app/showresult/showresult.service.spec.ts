import { TestBed } from '@angular/core/testing';

import { ShowresultService } from './showresult.service';

describe('ShowresultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowresultService = TestBed.get(ShowresultService);
    expect(service).toBeTruthy();
  });
});
