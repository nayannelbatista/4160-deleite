import { ResolveFn } from '@angular/router';
import { Product } from './interfaces/product';
import { ProductService } from './services/product.service';
import { inject } from '@angular/core';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productService = inject(ProductService)
  const productId = parseInt(route.paramMap.get('id') ?? '0', 10);
  return productService.getProductById(productId);
}
