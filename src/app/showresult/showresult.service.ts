import { Exam } from './../models/exam.model';
import { Result } from './../models/result.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from './../models/student.model';
import { Course } from '../models/course.model';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowresultService {

  constructor(private _http:HttpClient) { }

  courses:Course[] = [];
  results:Result[]=[];
  student = new Student();
  

GetStudent(){
  let studentSnn = localStorage.getItem('ssn');
   return  this._http.get(`${environment.url}/Student/Get/${studentSnn}`).subscribe(
    res=>  this.student = res as Student,
   );
 }


 // GetAllExams(){
 //  return this.
 // }

GetCoursesTolevel(){
 this._http.get(`${environment.url}/Course/Get`).subscribe(
   res=>( this.courses = (res as Course[]).filter(x=>x.LevelName == this.student.LevelName),console.log(this.courses,this.student.LevelName)),
   ()=> alert("error")
 )
}
   exams:Exam[] = [];

GetAllExam(){
  return this._http.get(`${environment.url}/Exam/Get`).subscribe(
    res=> (this.exams = res as Exam[]),
  )
}

GetCourseName(id:number){
  return this.courses.filter(x=>x.CourseId == id)[0].Name;
}

GetExamName(id:number){
  var exam =  this.exams.filter(x=>x.ExamId == id);
  return exam[0].ExamName;
}



GetResultToCourse(coursename: string){

  let studentSnn = localStorage.getItem("ssn");
  return this._http.get(`${environment.url}/Result/GetResultToStudentToCourse?courseName=${coursename}&studentId=${studentSnn}`)
    .subscribe(
      res=> this.results = res as Result[],
      ()=>alert("error")
    )
}




}

