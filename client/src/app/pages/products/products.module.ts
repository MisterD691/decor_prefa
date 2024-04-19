import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductRoutingModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    NgxPaginationModule
  ]
})
export class ProductsModule { }
