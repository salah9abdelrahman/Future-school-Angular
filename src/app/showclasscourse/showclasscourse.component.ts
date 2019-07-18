import { ShowclasscourseService } from './showclasscourse.service';
import { ClassRoom } from './../models/classroom.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showclasscourse',
  templateUrl: './showclasscourse.component.html',
  styleUrls: ['./showclasscourse.component.css']
})
export class ShowclasscourseComponent implements OnInit {

  classes:ClassRoom[]=[];
  constructor( private _classservice:ShowclasscourseService) { }

  ngOnInit() {
    this.getClass();
  }

  getClass()
  {
    this._classservice.get().subscribe(res=>
      {
        this.classes=res as ClassRoom[];
      })
  }
}
