import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { supabase } from './supabase.client';

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
}


