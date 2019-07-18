import { TestBed } from '@angular/core/testing';

import { CreateexamService } from './createexam.service';

describe('CreateexamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateexamService = TestBed.get(CreateexamService);
    expect(service).toBeTruthy();
  });
});
