import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

export const supabase = createClient(
  environment.supabaseUrl, 
  environment.supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  }
)

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return from(
      supabase
        .from('products')
        .select('*')
        .then(({ data: products, error}) => {
          if (error) throw new Error(error.message);
          return products || []
        })
    )
  }

  getProductById(id: number): Observable<Product> {
    return from(
      supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()
        .then(({ data: product, error}) => {
          if (error) throw new Error(error.message);
          return product
        })
    )
  }

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([])
  cartItems$ = this.cartItemsSubject.asObservable();

  getCurrentItems() {
    return this.cartItemsSubject.getValue();
  }

  addToCart(procuct: Product) {
    const currentItems = this.getCurrentItems();
    const itemIndex = currentItems.findIndex((item) => item.product.id === product.id)
  
    if(itemIndex >= 0) {
      currentItems[itemIndex].quantity++
    } else {
      currentItems.push({ product, quantity: 1})
    }

    this.cartItemsSubject.next(currentItems)
  }

}


