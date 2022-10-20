import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foodizant';
  why = '';
  Disappear = false;
  disappear(){
this.Disappear=true;
  }
  customers : any;
  constructor(private cs : CustomerService){}
  ngOnInit(){this.showlist();}
  showlist(){this.cs.getAll().subscribe(data =>{this.customers = data;},error=>{console.log(error);});}
}
