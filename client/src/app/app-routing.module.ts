import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [{
  path:'bill',component:BillComponent
},
 {
   path:'invoice',component:InvoiceComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
