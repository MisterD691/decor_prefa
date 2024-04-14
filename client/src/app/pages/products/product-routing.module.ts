import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    runGuardsAndResolvers: 'always',
    component: ProductListComponent
  },
  {
    path: 'form',
    runGuardsAndResolvers: 'always',
    component: ProductFormComponent
  },
  {
    path: 'detail',
    runGuardsAndResolvers: 'always',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    runGuardsAndResolvers: 'always',
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
