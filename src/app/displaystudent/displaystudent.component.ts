import { DisplaystudentService } from './displaystudent.service';
import { ServiceproviderService } from './../providers/Service/serviceprovider.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css']
})
export class DisplaystudentComponent implements OnInit {
  students:Student[]=[];

  constructor(private _studentservice:DisplaystudentService) { }

  ngOnInit() {
    this.getStudent();
    
  }
  
  getStudent(){
    this._studentservice.get().subscribe(res=>{
      this.students= res as Student[];
    })
  }
}
