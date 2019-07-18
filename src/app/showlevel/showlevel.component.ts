import { ShowlevelService } from './showlevel.service';
import { Component, OnInit } from '@angular/core';
import { Level } from '../models/level.model';

@Component({
  selector: 'app-showlevel',
  templateUrl: './showlevel.component.html',
  styleUrls: ['./showlevel.component.css']
})
export class ShowlevelComponent implements OnInit {
levels:Level[]=[];
  constructor(private _levelservice:ShowlevelService) { }

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
