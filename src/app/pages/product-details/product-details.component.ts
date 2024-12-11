import { Component } from '@angular/core';

import { ProductDetailComponent } from '../../components/product-detail/product-detail.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
