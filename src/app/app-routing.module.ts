import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketDetailsGuard } from './ticket-details.guard';
import { TicketResolverGuard } from './ticket-resolver.guard';

import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { GoalsettingComponent } from './goalsetting/goalsetting.component';
import { TransactionfailureComponent } from './transactionfailure/transactionfailure.component';
import { TransactionsuccessComponent } from './transactionsuccess/transactionsuccess.component';
import { RegistrationfailComponent } from './registrationfail/registrationfail.component';

// const routes: Routes = [
//   { path: ' ', redirectTo:'ViewTicketsComponent', pathMatch:'full'},
//   { path: 'createticket', component: CreateTicketComponent, canDeactivate: [CreateTicketCanDeactivateGuard] },
//   { path: 'listoftickets', component: ListOfTicketsComponent, resolve: {ticketList: TicketListResolverGuard} },
//   // { path: 'tickets/:id', component: TicketDetailsComponent, resolve: {ticketList: TicketListResolverGuard}, canActivate: TicketDetailsGuard },
//   { path: 'tickets/:id', component: TicketDetailsComponent, resolve: {ticketList: TicketListResolverGuard}},
//   // { path: 'edit/:id', component: EditTicketComponent, resolve: {ticket: TicketResolverGuard}},
//   { path: 'edit/:id', component: EditTicketComponent, resolve: {ticketList: TicketListResolverGuard}},
//   // { path: 'edit', component: EditTicketComponent}
//   { path: 'success', component: SuccessComponent},
//   { path: 'update', component: UpdateComponent},
//   { path: 'delete', component: DeleteComponent}
// ];

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: CreateTicketComponent},
  { path: 'dashbord', component: DashbordComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'goalsetting', component: GoalsettingComponent},
  { path: 'transactionfailure', component: TransactionfailureComponent},
  { path: 'transactionsuccess', component: TransactionsuccessComponent},
  { path: 'registrationfail', component: RegistrationfailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
