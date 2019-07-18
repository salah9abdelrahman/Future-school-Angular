import { Component, OnInit } from '@angular/core';
import { AttandanceService } from '../attandance/attandance.service';
import { LoginService } from '../login/login.service';
import { CreateexamService } from '../createexam/createexam.service';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private _attendenceService:AttandanceService, private _loginService:LoginService, private _examsService:CreateexamService,private _resultservice:ResultService) { }

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
