import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from './models/ticket';
import { TicketService } from './services/ticket.service';

@Injectable({
  providedIn: 'root'
})
export class TicketResolverGuard implements Resolve<Ticket> {

  ticketId:number;
  constructor(private _ticketService: TicketService, private _route: ActivatedRoute) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ticket> {
    // throw new Error("Method not implemented.");

     this._route.paramMap.subscribe(params => {
      this.ticketId = +params.get('id');
    });
    return  this._ticketService.getTicket(this.ticketId);
  }
 
}
