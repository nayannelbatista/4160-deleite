import { Component } from '@angular/core';
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-checkout',
  imports: [CartComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
