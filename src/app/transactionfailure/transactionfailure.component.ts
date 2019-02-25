import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactionfailure',
  templateUrl: './transactionfailure.component.html',
  styleUrls: ['./transactionfailure.component.css']
})
export class TransactionfailureComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToTransaction() {
    this._router.navigate(['/goalsetting']);
  }

}
