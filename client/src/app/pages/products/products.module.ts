import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    ProductFormComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
