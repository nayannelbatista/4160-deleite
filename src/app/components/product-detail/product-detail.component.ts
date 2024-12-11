import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Meta, Title } from '@angular/platform-browser';

import { Product } from '../../interfaces/product';
import { AppShellNoRenderDirective } from '../../directives/app-shell-no-render.directive';
import { AppShellRenderDirective } from '../../directives/app-shell-render.directive';

@Component({
    selector: 'app-product-detail',
    imports: [
        AppShellNoRenderDirective,
        AppShellRenderDirective,
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIcon,
        MatProgressSpinner,
        RouterLink
    ],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  quantities: number[] = [1, 2, 3, 4, 5];
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
    if(this.product) {
      this.setPageMeta(this.product)
    }
  }

  setPageMeta(product: Product) {
    this.title.setTitle(`${product.title} - Detalhes do produto`);
    this.meta.addTags([
      { name: 'description', content: product.ingredients },
      { property: 'og:title', content: product.title },
      { property: 'og:description', content: product.ingredients },
      { property: 'og:image', content: product.imageDetails },
      { name: 'twitter:card', content: 'summary_large_image' }
    ])
  }
}
