import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplaystaffService {
public _url="http://localhost:54102/";
  constructor(private HttpClient:HttpClient) { }
  get(){
   return this.HttpClient.get(this._url+"teacher/get");
  }
}
