import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
FusionChartsModule.fcRoot(FusionCharts, Column2D);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { ValueArrayPipe } from './value-array.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { CustomDirective } from './shared/custom.directive';
import { CustomModuleModule } from './custom-module/custom-module.module';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionComponent } from './transaction/transaction.component';
import { GoalsettingComponent } from './goalsetting/goalsetting.component';
import { CountsummaryComponent } from './countsummary/countsummary.component';
import { TransactionfailureComponent } from './transactionfailure/transactionfailure.component';
import { TransactionsuccessComponent } from './transactionsuccess/transactionsuccess.component';
import { RegistrationfailComponent } from './registrationfail/registrationfail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    ViewTicketsComponent,
    ValueArrayPipe,
    PageNotFoundComponent, 
    AccordionComponent,
    CustomDirective,
    LoginComponent,
    DashbordComponent,
    SuccessComponent,
    ErrorComponent,
    LogoutComponent,
    TransactionComponent,
    GoalsettingComponent,
    CountsummaryComponent,
    TransactionfailureComponent,
    TransactionsuccessComponent,
    RegistrationfailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    CustomModuleModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
