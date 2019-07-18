
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import {  AttandanceService} from '../attandance/attandance.service';

@Component({
  selector: 'app-attandance',
  templateUrl: './attandance.component.html',
  styleUrls: ['./attandance.component.css']
})
export class AttandanceComponent implements OnInit {

  constructor(private _attendenceService:AttandanceService, private _loginService:LoginService) { }


  ngOnInit() {
  this._attendenceService.GetTeacher();
  this._attendenceService.GetlevelToSepcificTeacher();
  this._attendenceService.GetCoursesToTeacher();
   this._attendenceService.GetAllStudents();  
  }
  sessionDate = new Date().toLocaleString();



FullName():string{
  return this._attendenceService.teacher.FName + ' ' + this._attendenceService.teacher.LName;
}


}
