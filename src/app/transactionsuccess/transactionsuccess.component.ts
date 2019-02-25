import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactionsuccess',
  templateUrl: './transactionsuccess.component.html',
  styleUrls: ['./transactionsuccess.component.css']
})
export class TransactionsuccessComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToDashBord(){
    this._router.navigate(['/dashbord']);
  }

}
