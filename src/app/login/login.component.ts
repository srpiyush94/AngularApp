import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { NgForm } from '@angular/forms';
import { TicketService } from '../services/ticket.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') public loginForm: NgForm;

  login: Login = {
    email: null,
    password: null,
  }

  constructor(private _router: Router, private _loginService: LoginService) {

   }

  ngOnInit() {
  }

  onSubmitingForm() {

    this._loginService.postTicket(this.login).subscribe(
      (data: Login) => {
        console.log(data); 
        
      },
      (error: any) => {
        console.log(error);
        
      }
    );
   //  this.newTicket = <Ticket>(Object.assign({}, this.ticket));
  //  this._ticketService.postTicket(this.login).subscribe(
  //       (data: Login) => {
  //        //  console.log(data); 
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       } 
  //  );
    
   this._router.navigate(['/success']);
 }

  goToRegistration(){
    this._router.navigate(['/registration']);
  }

}
