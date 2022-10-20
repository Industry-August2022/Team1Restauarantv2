import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryCheckoutComponent } from './delivery-checkout/delivery-checkout.component';
import { LoginComponent } from './login/login.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [{path:'login', component: LoginComponent},{path:'delivery', component: DeliveryCheckoutComponent},
                        {path:'orderconfirmation',component: OrderConfirmationComponent}, {path:'shopping-cart', component: ShoppingCartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
