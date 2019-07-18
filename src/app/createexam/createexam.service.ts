import { environment } from './../../environments/environment.prod';
import { Exam } from './../models/exam.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateexamService {


  exams:Exam[] = [];
  courseExams:Exam[] = [];

  getExams(){
    this._http.get(`${environment.url}/Exam/Get`).subscribe(
      re=>this.exams=re as Exam[],
      error=>console.log("cannot get exams")
    )
  }

  GetExamsTocourse( coursename:string){
    this.courseExams = this.exams.filter(x=>x.CourseName == coursename);
    console.log(this.courseExams);

  }

  constructor(private _http:HttpClient) { }

  CreateExam(coursename:string, examname:string, degree:number){


    var check=this.exams.some(ww=>ww.CourseName==coursename&& ww.ExamName==examname);
    if(check==false){
      
      var exam = new Exam();
    exam.CourseName = coursename;
    //exam.
    exam.ExamName = examname;
    exam.MaxExamDegree = degree;
  //  console.log(`exam ${exam.CourseName}`)
    this._http.post(`${environment.url}/Exam/Post`, exam).subscribe(
      response=> (exam.ExamId = response as number,
        this.exams.push(exam)
      ),
      error=>alert("error"))



    }
    else alert("alreadyExisted")
    
      

  
  }
}
