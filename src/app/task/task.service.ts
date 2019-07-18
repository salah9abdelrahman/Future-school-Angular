import { Task } from './task.model';
import { Injectable } from '@angular/core';
@Injectable()
export class TaskService{
 isExist(title:string ,tasks:Task[]):boolean
 {
    return tasks.some(task=>task.Title==title && !task.Done);
 }
}