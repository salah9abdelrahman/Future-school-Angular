import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient, private _route:Router) { }

 public isLogin:boolean=false;
storage:any;
res:number;

  Login(ssn:string, password:string){
   // alert("start")
    var log = new Login();
    log.SNN = ssn;
    log.Password = password;
    this._http.post(`${environment.url}/Login/Post`,log).subscribe(
     response=>(
        this.res = response as number,
          this.bla(this.res)
         
     ),
     error=>(
       console.log("error")
     ),
   )

   localStorage.setItem("ssn", log.SNN)
  // console.log(log.SNN)
  this.isLogin=true;

  }
  bla(x:number){
    if(x == 2){ //teacher
      return this._route.navigateByUrl("/staffevaluate")
    }
    else if(x == 1 || x == 3){
      return this._route.navigateByUrl("/parent")
    }
    else if(x == 4){
      return this._route.navigateByUrl("/admin")
    }
    else if(x > 4){
      return alert("doesn't exist")
    }
  }

  logout(){
   
        // this._http.post(`${environment.url}/Logout`, {})
        //   .subscribe(res => {
        //     localStorage.removeItem("ssn");
        //     this.isLogin=false;
        //   }, (err) => {
        //     console.log(err);
        //   });
        this.isLogin=false;
        localStorage.removeItem("ssn");
      console.log(localStorage.getItem("ssn"))

 
  }
  // WhoLogin(x:string){
  //   var type = this.json["type"];
  //   var person = this.json[type];
  //  //console.log(person);
  //   return person[x];
  // }


}
