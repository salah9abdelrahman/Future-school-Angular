import { CreateexamService } from './createexam.service';
import { Component, OnInit } from '@angular/core';
import { AttandanceService } from '../attandance/attandance.service';

@Component({
  selector: 'app-createexam',
  templateUrl: './createexam.component.html',
  styleUrls: ['./createexam.component.css']
})
export class CreateexamComponent implements OnInit {

  constructor(private _attendenceService:AttandanceService, private _examsService:CreateexamService) { }

  ngOnInit() {
    this._attendenceService.GetTeacher();
    this._attendenceService.GetlevelToSepcificTeacher();
     this._attendenceService.GetCoursesToTeacher();
     this._attendenceService.GetAllStudents();
     this._examsService.getExams();
     
  }
  FullName():string{
    return this._attendenceService.teacher.FName + ' ' + this._attendenceService.teacher.LName;
  }
}
