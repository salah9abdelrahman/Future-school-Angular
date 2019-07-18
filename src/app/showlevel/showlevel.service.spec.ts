import { TestBed } from '@angular/core/testing';

import { ShowlevelService } from './showlevel.service';

describe('ShowlevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowlevelService = TestBed.get(ShowlevelService);
    expect(service).toBeTruthy();
  });
});
