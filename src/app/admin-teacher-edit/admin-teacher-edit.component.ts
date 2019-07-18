import { Component, OnInit } from '@angular/core';
import { AdminTeacherEditService } from './admin-teacher-edit.service';

@Component({
  selector: 'app-admin-teacher-edit',
  templateUrl: './admin-teacher-edit.component.html',
  styleUrls: ['./admin-teacher-edit.component.css']
})
export class AdminTeacherEditComponent implements OnInit {

  constructor(private _updateTeacherService:AdminTeacherEditService) { }

  ngOnInit() {
    this._updateTeacherService.getTeacher("454564545454");
    this._updateTeacherService.create();
    this._updateTeacherService.getCourses();
    
    
  }

}
