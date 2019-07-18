import { ShowlevelcourseService } from './showlevelcourse.service';
import { Level } from './../models/level.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showlevelcourse',
  templateUrl: './showlevelcourse.component.html',
  styleUrls: ['./showlevelcourse.component.css']
})
export class ShowlevelcourseComponent implements OnInit {
  levels:Level[]=[];
  constructor(private _levelservice:ShowlevelcourseService) { }

  ngOnInit() {
    this.getLevel();
  }
  getLevel()
  {
    this._levelservice.get().subscribe(res=>
      {
        this.levels=res as Level[];
      })
  }
}
