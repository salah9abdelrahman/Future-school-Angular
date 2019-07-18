import { TestBed } from '@angular/core/testing';

import { ShowclassService } from './showclass.service';

describe('ShowclassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowclassService = TestBed.get(ShowclassService);
    expect(service).toBeTruthy();
  });
});
