import {MenuComponent} from '../menu/menu.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.html',
  styleUrls: ['./shopping-cart.css']
})

export class ShoppingCartComponent {
  title = 'Browsing Restaurants';
  obj: any;
  constructor(private dialog:MatDialog )
  {

  }

menu = [
  {name:"Maya's Mediterranean",place:"Dallas",imageurl:"/assets/fseqknyvblex.webp"},
  {name:"Raising Cane's",place:"Atlanta",imageurl:"/assets/OIP.jpg"},
  {name:"KFC",place:"Tampa",imageurl:"/assets/R.jpg"},
]

showDialog(obj)
{
  this.dialog.open(MenuComponent,{data:{name:obj}});
}



}
