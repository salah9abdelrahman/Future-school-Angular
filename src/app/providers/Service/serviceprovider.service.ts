import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

  constructor(private http: HttpClient) { 
    
  }
  public url:string="https://jsonplaceholder.typicode.com/posts?fbclid=IwAR1CiLVhxPZDmqUiuwKqx1JhPeBhR3iJlxWF00CCg6RFR1PCDREXpc_L0UQ";

}
