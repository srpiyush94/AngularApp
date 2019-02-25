import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login } from './models/login';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Logout } from './models/logout';
import { GoalSetting } from './models/goalsetting';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor( private _http: HttpClient ) { }

  postTicket(login: Login) {
    return this._http.post<Login>('http://localhost:8080/BackEndCollaboration/login', login, httpOptions)
                          .pipe(catchError(this.handleError));
   }

   logOut(logout: Logout) {
    return this._http.put<Logout>('http://localhost:8080/BackEndCollaboration/logout',logout, httpOptions)
                          .pipe(catchError(this.handleError));
   }

   postGoalSetting(goalSetting:GoalSetting) {
    return this._http.put<GoalSetting>('http://localhost:8080/BackEndCollaboration/saveGoal',goalSetting, httpOptions)
    .pipe(catchError(this.handleError));
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
