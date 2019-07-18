import { HttpClient } from '@angular/common/http';
import { Course } from './../models/course.model';
import { Component, OnInit } from '@angular/core';
import { OurcourseService } from './ourcourse.service';

@Component({
  selector: 'app-ourcourse',
  templateUrl: './ourcourse.component.html',
  styleUrls: ['./ourcourse.component.css']
})
export class OurcourseComponent implements OnInit {
  Homecoursess:Course[]=[];
  constructor(private httpclient:HttpClient,private _homeservice:OurcourseService) { }


  ngOnInit() {
  this.getcourse();
  }
  getcourse()
{
this._homeservice.get().subscribe(
  response=>{this.Homecoursess=response as Course[];
    console.log(this.Homecoursess+"am getting data")},
    (err)=>{console.log("error message is"+err)});
}

}
