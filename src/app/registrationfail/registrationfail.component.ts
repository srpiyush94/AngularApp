import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationfail',
  templateUrl: './registrationfail.component.html',
  styleUrls: ['./registrationfail.component.css']
})
export class RegistrationfailComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToRegistration() {
    this._router.navigate(['/registration']);
  }
}
