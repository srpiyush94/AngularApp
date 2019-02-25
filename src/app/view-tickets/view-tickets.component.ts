import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { error } from '@angular/compiler/src/util';
import { Ticket } from '../models/ticket';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  tickets: Ticket[];
  

  constructor(private _ticketService: TicketService, private _route: ActivatedRoute) { }

  ngOnInit() {
    // this.getTickets();
    this.tickets = this._route.snapshot.data['ticketList'];
  }

 private getTickets() {
    this._ticketService.getTickets().subscribe((ticketsData: Ticket[]) => {
      this.tickets = ticketsData;
    })
  }

}
