import { Component, OnInit } from '@angular/core';
import  {Customer} from '../Customer.model'
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-delivery-checkout',
  templateUrl: './delivery-checkout.component.html',
  styleUrls: ['./delivery-checkout.component.css']
})

export class DeliveryCheckoutComponent implements OnInit {
OneCustomer !: Customer ;
n :string = '';
a : string = '';
z : number = 0;
pm : number = 0;
cc : string ='';
concatination(form : NgForm){
  this.n = form.value.namerecipient;
  this.a =form.value.StreetAddress+" "+form.value.city+" "+form.value.state;
  this.z=form.value.zip;
  this.pm=form.value.phone_number;
  this.cc=form.value.card_type +" " + form.value.card_number;
  this.OneCustomer = new Customer(this.cc,this.n,this.a,this.z,this.pm);
}
ngOnInit(): void {
  
}
}
