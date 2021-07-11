import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { Fields } from '../tableHeadings';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
@Input() Data:Array<Fields>=[]
@Input() customerData:Array<Customer>=[]
@Input() amount:string=""
isBillVisible=false;
date=new Date()
random:number=0
  constructor(private router:Router) { }

  ngOnInit(): void {
  this.random=Math.floor(Math.random()*20)
  }
 gotoBill(){
   this.isBillVisible=true;
 }
 printPage(){
   window.print()
 }
}
