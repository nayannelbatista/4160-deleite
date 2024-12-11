import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart_item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private getCurrentItems(): CartItem[] {
    return this.cartItemsSubject.getValue();
  }

  addToCart(product: Product) {
    const currentItems = this.getCurrentItems();
    const itemIndex = currentItems.findIndex(
      (item) => item.product.id === product.id)

      if(itemIndex >= 0) {
        currentItems[itemIndex].quantity++
      } else {
        currentItems.push({product, quantity: 1})
      }

      this.cartItemsSubject.next(currentItems)
  }

  getTotalQuantity(): number {
    return this.getCurrentItems().reduce((acc, item) => acc + item.quantity, 0)
  }

}
