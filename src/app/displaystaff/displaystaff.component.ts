import { Teacher } from './../models/teacher.model';
import { Component, OnInit } from '@angular/core';
import { DisplaystaffService } from './displaystaff.service';

@Component({
  selector: 'app-displaystaff',
  templateUrl: './displaystaff.component.html',
  styleUrls: ['./displaystaff.component.css']
})
export class DisplaystaffComponent implements OnInit {
teachers:Teacher[]=[];
  constructor(private _staffService:DisplaystaffService) { }

  ngOnInit() {
this.getStaff();
  }
getStaff()
{
  this._staffService.get().subscribe((res)=>
  {
    this.teachers=res as Teacher[];
  },(err)=>{
    console.log("error");
  });
}
}
