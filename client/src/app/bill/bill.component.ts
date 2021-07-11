import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms'
import { Fields } from '../tableHeadings';
import {Customer} from '../Customer'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {Router} from '@angular/router'
import { CustomerServiceService } from '../_services/customer-service.service';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  calculate:FormGroup
  customerDetails:FormGroup
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  constructor(private fb:FormBuilder,private router:Router,private customerService:CustomerServiceService) {
    this.calculate=this.fb.group({})
    this.customerDetails=this.fb.group({})
   }
  nwt:number=2
  rate:number=0
  taxableValue:number=0
  cgst:number=0
  sgst:number=0
  total:number=0;
  finalTotal:number=0
  grossWt:number=0
  product:string=''
  customerName:string=""
  address:string=''
  pan:string=''
  mobile:number=0
  amount:string=""
fieldArray:Array<Fields>=[];
customerData:Array<Customer>=[]
newRow:any={}
isHide=true
isInvoiceVisible=false;
  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
   this.calculate=this.fb.group({
      Product:['',Validators.required],
      GWT:['',Validators.required,Validators.pattern(this.numberRegEx)],
      NWT:['',Validators.required,Validators.pattern(this.numberRegEx)],
      Rate:['',Validators.required,Validators.pattern(this.numberRegEx)],
      TaxableValue:[''],
      CGST:[''],
      SGST:[''],
      IGST:[''],
      Total:['']
    }),
    this.customerDetails=this.fb.group({
      Name:['',Validators.required],
      Address:['',Validators.required],
      Mobile:['',Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      PAN:['',Validators.required]
    })
  }
  get calculateForm(){
    return this.calculate.controls;
  }
  get customer(){
    return this.customerDetails.controls;
  }
   addRow(){
    // this.newRow=[];
    // this.newRow={Product:"",GrossWt:"",NetWt:"",Rate:"",TaxableValue:"",CGST:"",SGST:"",IGST:"",Total:""}
    // this.fields.push(this.newRow)
   }
   deleteRow(index:number){
     if(this.fieldArray.length>1){
       this.fieldArray.splice(index,1);
     }
   }
   calculateTotal(){
     debugger;
    //  if(this.calculate.invalid)
    //    {
    //      return;
    //    }
     this.isHide=false
     this.nwt=this.calculate.get('NWT')?.value;
     this.rate=this.calculate.get('Rate')?.value;
     this.grossWt=this.calculate.get('GWT')?.value
     this.product=this.calculate.get("Product")?.value
   this.taxableValue=  this.calculate.get('NWT')?.value * this.calculate.get('Rate')?.value;
   this.cgst=(1.5/this.taxableValue*100);
   this.sgst=(1.5/this.taxableValue*100);
  
     this.total=this.cgst+this.sgst+this.taxableValue;
     this.finalTotal+=this.total;
     this.newRow={Product:this.product,GrossWt:this.grossWt,NetWt:this.nwt,Rate:this.rate,TaxableValue:this.taxableValue,CGST:this.cgst,SGST:this.sgst,IGST:"",Total:this.total}
     this.fieldArray.push(this.newRow)
   this.calculate.reset()
   this.calculate.controls['TaxableValue'].reset()
      
   }
   gotoInvoice(){
     debugger;
     if(this.customerDetails.invalid){
       return
     }
     this.isInvoiceVisible=true;
     this.customerName=this.customerDetails.get('Name')?.value
     this.address=this.customerDetails.get('Address')?.value
     this.mobile=this.customerDetails.get('Mobile')?.value
     this.pan=this.customerDetails.get('PAN')?.value
     this.amount=this.total.toString()
     this.newRow={Name:this.customerName,Address:this.address,Mobile:this.mobile,PAN:this.pan,Amount:this.finalTotal}
     this.customerData.push(this.newRow)
     debugger;
     this.customerService.saveCustomer(this.customerDetails.value).subscribe((data)=>{
       console.log(data)

     })
   }
}
