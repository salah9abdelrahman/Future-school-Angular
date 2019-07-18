import { Student } from './../models/student.model';
import { Attendence } from './../models/attendence.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class ShowattandanceService {

  coursesByLevel:Course[]=[]
  courses:Course[] = []
  constructor(private _http:HttpClient) { }
  studentSnn = localStorage.getItem("ssn");
  attends:Attendence[]=[];
  student = new Student();

  GetAttendToStudent(){
    this._http.get(`${environment.url}/Attendence/GetAttendencesToOneStudent/${this.studentSnn}`).subscribe(
      res=> this.attends = res as Attendence[],
      error=>alert("error")
    )

   
  }


  AttebdOrNot(a:boolean):string{
    if(a == true)
      return "attended"
    else
      return "not attended"
  }

  GetStudent(){
    this._http.get(`${environment.url}/Student/Get/${this.studentSnn}`).subscribe(
      response=> (this.student = response as Student),
      error=>alert("error happend")
    )

  }

  getCoursesOnLevel(){
    //alert("ad" +this.student.LevelName)
    this.coursesByLevel=this.courses.filter(c=>c.LevelName==this.student.LevelName);
    //alert(this.coursesByLevel)
  
 }
 GetAllCourses(){
   this._http.get(`${environment.url}/Course/Get`).subscribe(
     res=> (this.courses = res as Course[], //alert("all courses Got"),
     ()=> alert("error")
   ))

   console.log(this.student)
 }
}
