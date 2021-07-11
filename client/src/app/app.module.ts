import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { GoldSaveComponent } from './gold-save/gold-save.component';
import {BsDatepickerModule,BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { InvoiceComponent } from './invoice/invoice.component'
import {ReactiveFormsModule} from '@angular/forms'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    GoldSaveComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
