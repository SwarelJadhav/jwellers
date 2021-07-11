import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { GoldSaveComponent } from './gold-save/gold-save.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [{
  path:'bill',component:BillComponent
},
 {
   path:'invoice',component:InvoiceComponent
 },
 {
   path:'gold',component:GoldSaveComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
