import { ShowcourseService } from './showcourse.service';
import { ShowclassService } from './../showclass/showclass.service';
import { Course } from './../models/course.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcourse',
  templateUrl: './showcourse.component.html',
  styleUrls: ['./showcourse.component.css']
})
export class ShowcourseComponent implements OnInit {
courses:Course[]=[];
  constructor( private _courseservice:ShowcourseService) { }

  ngOnInit() {
    this.getcourse();
  }

  getcourse()
  {
    this._courseservice.get().subscribe(res=>
      {
          this.courses=res as Course[];   
      })
  }
}
