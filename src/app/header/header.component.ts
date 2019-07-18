import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _login:LoginService) { }

  ngOnInit() {
    alert(this._login.isLogin)

  }
  logout()
  {
    this._login.logout();
  }
}
