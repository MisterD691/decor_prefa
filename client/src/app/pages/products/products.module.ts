import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    ProductFormComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
