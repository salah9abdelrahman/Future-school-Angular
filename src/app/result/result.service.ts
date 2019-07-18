import { environment } from './../../environments/environment';
import { Result } from './../models/result.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private _http:HttpClient) { }

   results:Result[]=[];
  PostResults(studentId:string,ExamId:number,studentResult:number){
    var res=new Result();
    res.ExamId=ExamId;
    res.StudentId=studentId;
    res.StudentResult=studentResult;
    this.results.push(res);
    alert("press submit to finish the operation")
    console.log(this.results);


  }
  PostAllResults(){
    console.log(this.results)
    this._http.post(`${environment.url}/Result/Post`,this.results).subscribe(
      re=>(console.log("submitted"),
      alert("added succesfully")),
      error=>alert("Error Submittig")
    )
  }



}
