import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartItem } from '../../interfaces/cart_item';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';


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
export class CartComponent implements OnInit{
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items
      this.calculateTotal()
    })
  }

  getQuantities(currentQuantity: number): number[] {
    const maxQuantity = Math.max(currentQuantity, 10);
    return Array.from({ length: maxQuantity }, (_, i) => i + 1);
  }

  updateQuantity(productId: number, newQuantity: number) {
    this.cartService.updateCartItem(productId, newQuantity)
  }  


  removeItem(productId: number) {
    this.cartService.removeFromCart(productId)
  }


  finalizePurchase() {
    alert('Compra finalizada')
  }


  continueShopping() {
    this.router.navigate(['/'])
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }
}
