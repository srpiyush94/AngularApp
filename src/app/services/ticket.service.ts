import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Ticket } from '../models/ticket';


 const httpOptions = {
   headers:new HttpHeaders({'Content-Type': 'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor( private _http: HttpClient ) { }

  getTickets() {
   return this._http.get<Ticket[]>("http://localhost:8080/api/tickets/ticket/alltickets")
                    .pipe(                      
                      catchError(this.handleError)
                    );
  }
  

   postTicket(ticket: Ticket) {
    return this._http.post<Ticket>('http://localhost:8080/BackEndCollaboration/registration', ticket, httpOptions)
                          .pipe(catchError(this.handleError));
   }

   getTicket(ticketId: number) {
    return this._http.get<Ticket>("http://localhost:8080/api/tickets/ticketbyid/"+ticketId)
                     .pipe(                      
                       catchError(this.handleError)
                     );
   }

   deleteTicket(ticketId: number) {
    return this._http.delete<Ticket>("http://localhost:8080/api/tickets/delete/"+ticketId)
                     .pipe(                      
                       catchError(this.handleError)
                     );
   }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occured: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened, please try again later.');
  }

}
