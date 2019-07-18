import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'url';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  

  constructor(private _adminService:AdminService) { }
  ngOnInit() {
    this._adminService.create();
    this._adminService.getLevels();
    this._adminService.getCLassRooms();
    this._adminService.getCourses();
    
  }


  


  


}

