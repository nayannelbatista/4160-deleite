import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartItem } from '../../interfaces/cart_item';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  total: number = 0;

  getQuantities(currentQuantity: number): number[] {
    const maxQuantity = Math.max(currentQuantity, 10);
    return Array.from({ length: maxQuantity }, (_, i) => i + 1);
  }

  updateQuantity(productId: number, newQuantity: number) {}  


  removeItem(productId: number) {}


  finalizePurchase() {}


  continueShopping() {}
}

