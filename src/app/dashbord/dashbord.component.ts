import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  dataSource: Object;
    constructor(private _router:Router) {
        // this.dataSource = {
        //     chart: {
        //         "caption": "Countries With Most Oil Reserves [2017-18]",
        //         "subCaption": "In MMbbl = One Million barrels",
        //         "xAxisName": "Country",
        //         "yAxisName": "Reserves (MMbbl)",
        //         "numberSuffix": "K",
        //         "theme": "fusion",
        //     },
        //     // Chart Data
        //     "data": [{
        //         "label": "Venezuela",
        //         "value": "290"
        //     }, {
        //         "label": "Saudi",
        //         "value": "260"
        //     }, {
        //         "label": "Canada",
        //         "value": "180"
        //     }, {
        //         "label": "Iran",
        //         "value": "140"
        //     }, {
        //         "label": "Russia",
        //         "value": "115"
        //     }, {
        //         "label": "UAE",
        //         "value": "100"
        //     }, {
        //         "label": "US",
        //         "value": "30"
        //     }, {
        //         "label": "China",
        //         "value": "30"
        //     }]
        // }; // end of this.dataSource
    } // end of construc

  ngOnInit() {
  }

  goalSetting() {
    this._router.navigate(['/goalsetting']);
  }

}
