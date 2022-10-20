import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cs : CustomerService, private rt : Router) { }
process(newCustomer : {customerName:string,address:string}){
  console.log(newCustomer);
this.cs.create(newCustomer);
this.rt.navigate(['/orderconfirmation']);
}
shoppingCart(newCustomer){
  this.rt.navigate(['/shopping-cart']);
}
  ngOnInit(): void {
  }

}
