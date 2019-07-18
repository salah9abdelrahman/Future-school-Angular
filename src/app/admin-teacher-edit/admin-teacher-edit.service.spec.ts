import { TestBed } from '@angular/core/testing';

import { AdminTeacherEditService } from './admin-teacher-edit.service';

describe('AdminTeacherEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminTeacherEditService = TestBed.get(AdminTeacherEditService);
    expect(service).toBeTruthy();
  });
});
