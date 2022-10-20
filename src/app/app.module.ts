import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryCheckoutComponent } from './delivery-checkout/delivery-checkout.component';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    DeliveryCheckoutComponent,

    LoginComponent,
     OrderConfirmationComponent,
     ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
   // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
