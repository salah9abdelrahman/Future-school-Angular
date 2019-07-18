import { ShowcoursecourseService } from './showcoursecourse.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-showcoursecourse',
  templateUrl: './showcoursecourse.component.html',
  styleUrls: ['./showcoursecourse.component.css']
})
export class ShowcoursecourseComponent implements OnInit {
  courses:Course[]=[];
  constructor( private _courseservice:ShowcoursecourseService) { }

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
