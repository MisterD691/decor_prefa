import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    runGuardsAndResolvers: 'always',
    component: HomeComponent
  },
  {
    path: 'services',
    runGuardsAndResolvers: 'always',
    component: ServicesComponent
  },
  {
    path: 'login',
    runGuardsAndResolvers: 'always',
    component: LoginComponent
  },
  {
    path: 'register',
    runGuardsAndResolvers: 'always',
    component: RegisterComponent
  },
  {
    path: 'products',
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./pages/products/products.module').then(
      (m) => m.ProductsModule
    )
  },
  {
    path: 'orders',
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./pages/orders/orders.module').then(
      (m) => m.OrdersModule
    )
  },
  {
    path: 'blog',
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./pages/blog/blog.module').then(
      (m) => m.BlogModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
