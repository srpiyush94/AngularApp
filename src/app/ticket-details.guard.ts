import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketService } from './services/ticket.service';

@Injectable({
  providedIn: 'root'
})
export class TicketDetailsGuard implements CanActivate {

  constructor(private _ticketService: TicketService, private _router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const ticketExists = !!this._ticketService.getTicket(+next.paramMap.get('id'));
    //+ to convert string to number
    //!! to convert Ticket type to boolean
    if (ticketExists) {
      return true;
    } else {
      this._router.navigate(['notfound']);
      return false;
    }
  }
}
