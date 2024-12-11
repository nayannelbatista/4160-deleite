import { Component, inject, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';

import { Product } from '../../interfaces/product';

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
  private router = inject(Router)
  
  @Input() product!: Omit<Product, 'ingredient' | 'category' | 'imageDetails'>;
  
  goToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }
}

