import { Component, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';

import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product-card',
    imports: [
        MatCard,
        MatCardContent,
        MatCardActions
    ],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})

export class ProductCardComponent {

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }
  
  @Input() product!: Product;
  
  goToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}

