import { ShowresultService } from './showresult.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {

  constructor(private _showresultService:ShowresultService) { }

  ngOnInit() {
   this._showresultService.GetStudent();
  this._showresultService.GetCoursesTolevel();
  this._showresultService.GetAllExam();
  }


}
