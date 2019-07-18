import { ShowattandanceService } from './showattandance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showattandance',
  templateUrl: './showattandance.component.html',
  styleUrls: ['./showattandance.component.css']
})
export class ShowattandanceComponent implements OnInit {

  constructor(private _showattendService:ShowattandanceService ) { }

  ngOnInit() {
    this._showattendService.GetAttendToStudent();
    this._showattendService.GetStudent();
  }

}
