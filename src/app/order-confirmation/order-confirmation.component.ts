import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  title = '';

  customers : any;
ct : any;
customerID:any;
  constructor(private cs : CustomerService){}

  ngOnInit(){this.showlist();}
  showlist(){this.cs.getAll().subscribe(data =>{this.customers = data;},error=>{console.log(error);});}

  createCustomer(newCustomer:{customerName:string, address:string}){
this.cs.create(newCustomer);
  }
 DeleteCustomer(id:any){
   this.cs.delete(id).subscribe(
    (res)=>{console.log(res);}
  );
 }
 showASingleCustomer(){
   //this.cs.getByUrl(id).subscribe(data =>{this.customerID=data;},error=>{console.log(error);})
   this.customerID=this.customers[this.customers.length-1];
   console.log(this.customerID);
 }
 send(data:any){this.ct = data;}
 

}
