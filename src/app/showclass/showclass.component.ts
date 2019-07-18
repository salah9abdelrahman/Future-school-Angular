import { async } from '@angular/core/testing';
import { ShowclassService } from './showclass.service';
import { ClassRoom } from './../models/classroom.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showclass',
  templateUrl: './showclass.component.html',
  styleUrls: ['./showclass.component.css']
})
export class ShowclassComponent implements OnInit {
classes:ClassRoom[]=[];
  constructor( private _classservice:ShowclassService) { }

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
