import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateTicketComponent } from './create-ticket.component';

@Injectable({
  providedIn: 'root'
})
export class CreateTicketCanDeactivateGuard implements CanDeactivate<CreateTicketComponent> {
  canDeactivate(component: CreateTicketComponent): boolean  {
    if (component.createTicketForm.dirty) {
      return confirm('Are you sure, you want discard your changes?');
    }
    return true;
  }
  
}
