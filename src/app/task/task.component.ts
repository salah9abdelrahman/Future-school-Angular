import { TaskService } from './task.service';
import { Task } from './task.model';
import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
name:string="Nada";
tasks:Task[]=[];
date:Date=new Date();
  constructor(private taskservice:TaskService) { }

  ngOnInit() {

  }
  getPendingTasks():number
  {
  return  this.tasks.filter(task=>!task.Done).length;
  }
  add(title:string)
  {
   if ( this.taskservice.isExist(title,this.tasks))
    {
      alert("already exist");
    }
    else
      {
    let task:Task = new Task();
    task.Title=title;
    this.tasks.push(task);
      }
  }
  delete(index:number)
  {
    this.tasks.splice(index,1);
  }

  update(task:Task){
    task.Done=!task.Done;



  }

}
