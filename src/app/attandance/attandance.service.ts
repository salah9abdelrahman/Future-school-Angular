import { Attendence } from './../models/attendence.model';
import { ClassRoom } from './../models/classroom.model';
import { Course } from './../models/course.model';
import { Teacher } from './../models/teacher.model';
import { Level } from './../models/level.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class AttandanceService {

  levels:Level[] = [];
  courses:Course[] = [];
  classes:ClassRoom[] = [];
  teacherSnn = localStorage.getItem("ssn");
  teacher = new Teacher();
  allStudents:Student[]=[];
  studentsOnclass:Student[]=[];
  attandances:Attendence[]=[];


  constructor(private _http:HttpClient) { }
  
  GetlevelToSepcificTeacher(){
    return this._http.get(`${environment.url}/Level/GetLevelsToTeacher?teacherSnn=${this.teacherSnn}`).subscribe(
      levels=>(
          this.levels = levels as Level[]

      ),
      error=>(
        alert("can't get levels")
      )
    )
  }

  GetTeacher(){
    return this._http.get(`${environment.url}/Teacher/Get/${this.teacherSnn}`).subscribe(
        teach=>(
          this.teacher = teach as Teacher
         //  alert(teach)
      ),
      error=>(
        alert("can't get teacher")
      )
    )
  }

  GetCoursesToTeacher(){
    return this._http.get(`${environment.url}/Course/GetCoursesToTeacher?ssn=${this.teacherSnn}`).subscribe(
      course=> this.courses = course as Course[],
      error=> alert("error ")
    )
  }

  GetClassesToLevel(name:string){
    return this._http.get(`${environment.url}/ClassRoom/GetClassesToLevel?levelName=${name}`).subscribe(
      klass=> this.classes = klass as ClassRoom[],
      error=>alert("error")
    )
  }

  GetAllStudents(){
    return this._http.get(`${environment.url}/Student/Get`).subscribe(
      stus=> this.allStudents = stus as Student[]
      
    )
  }
  

  GetStudentOnClass(classname:string){
    this.studentsOnclass = this.allStudents.filter(x=>x.ClassName == classname);
  }

  PostAttendence(studentSnn:string, isAttend:boolean, teacherSnn:string, courseName:string){
    var attend = new Attendence();
    attend.CourseName = courseName;
    attend.IsAttended = isAttend;
    attend.StudentSNN = studentSnn;
    attend.TeacherSNN = teacherSnn;
    if(this.attandances.filter(x=>x.StudentSNN == studentSnn).length == 0){
      this.attandances.push(attend);
       console.log(attend);
      console.log("sd")

    }
  }

  PostAttendenceToApi(){
    this._http.post(`${environment.url}/Attendence/PostList`, this.attandances).subscribe(
      rep=>alert("done")
    )
  }
  



}
