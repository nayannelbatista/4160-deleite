import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { productResolver } from './product.resolver';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'details/:id', 
    component: ProductDetailsComponent,
    resolve: { product: productResolver}
  },
  { 
    path: 'checkout', 
    component: CheckoutComponent 
  }, 
  { 
    path: '', 
    component: HomeComponent 
  }, 
];
