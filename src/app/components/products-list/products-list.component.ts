import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Product } from '../../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { AppShellRenderDirective } from '../../directives/app-shell-render.directive';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    AppShellRenderDirective,
    CommonModule,
    ProductCardComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  productsByCategory: { category: string, products: Product[] }[] = [];
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.productService.getProducts();
    this.products$.subscribe(products => {
      this.groupProductsByCategory(products)
    })
  }

  groupProductsByCategory(products: Product[]) {
    const categories = [...new Set(products.map(product => product.category))];
    this.productsByCategory = categories.map(category => ({
      category,
      products: products.filter(product => product.category === category)
    }));
  }
}

