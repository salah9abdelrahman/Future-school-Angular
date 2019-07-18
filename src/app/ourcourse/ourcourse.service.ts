import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurcourseService {
  public _url:string="http://localhost:54102/";

  constructor(private htttp:HttpClient) { }
  get(){
    return this.htttp.get(this._url+'course/get');
  } 
}
