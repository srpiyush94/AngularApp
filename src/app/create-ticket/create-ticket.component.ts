import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  @ViewChild('ticketForm') public createTicketForm: NgForm;

  ticket: Ticket = {
    firstName: null,
    lastName: null,
    email: null,
    password: null
  }
  // newTicket: Ticket;

  constructor(private _router: Router, private _ticketService: TicketService) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
   }

  ngOnInit() {
  }
  onSubmitingForm() {

     this._ticketService.postTicket(this.ticket).subscribe(
       (data: Ticket) => {
         console.log(data);
        
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
    this.createTicketForm.reset();
    this._router.navigate(['success']); 
  }

}
