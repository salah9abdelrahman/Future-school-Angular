import { TestBed } from '@angular/core/testing';

import { ShowattandanceService } from './showattandance.service';

describe('ShowattandanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowattandanceService = TestBed.get(ShowattandanceService);
    expect(service).toBeTruthy();
  });
});
