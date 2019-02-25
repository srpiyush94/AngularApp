import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalSetting } from '../models/goalsetting';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goalsetting',
  templateUrl: './goalsetting.component.html',
  styleUrls: ['./goalsetting.component.css']
})
export class GoalsettingComponent implements OnInit {

  @ViewChild('goalsettingForm') public goalsettingForm: NgForm;

  spendingPatterns = ['FoodOrder savings', 'Shopping savings', 'Entertainment savings', 'Medical savings'];          
            
  financialGoals = ['Anniversary gifts', 'Education', 'Vocation', 'Insurence Premium'];

  goalsetting: GoalSetting = {
    spendingPattern: null,
    amount: null,
    financialGoal: null
  }
  constructor(private _router:Router,private _loginService:LoginService) { }

  ngOnInit() {
  }

  onSubmitingForm() {

    this._loginService.postGoalSetting(this.goalsetting).subscribe(
      (data: GoalSetting) => {
        console.log(data); 
        this._router.navigate(['transactionsuccess']);
      },
      (error: any) => {
        console.log(error);
        
      }
    );
   //  this.newTicket = <Ticket>(Object.assign({}, this.ticket));
   // this._ticketService.postTicket(this.ticket).subscribe(
   //      (data: Ticket) => {
   //       //  console.log(data); 
   //      },
   //      (error: any) => {
   //        console.log(error);
   //      } 
   // );
    this.goalsettingForm.reset();
   this._router.navigate(['success']);
 }

 GoToDashBoard() {
  this._router.navigate(['dashbord']);
 }

}
