import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../models/login';
import { Logout } from '../models/logout';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logout: Logout = {
    email: null,
    password: null
  }

  constructor(private _router: Router, private _loginService: LoginService) { 
    this._loginService.logOut(this.logout).subscribe(
      (logout: Logout) => {
        console.log(logout); 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  goToLogin() {
    this._router.navigate(['/login']);
  }
}
