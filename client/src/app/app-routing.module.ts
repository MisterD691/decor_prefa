import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    runGuardsAndResolvers: 'always',
    component: AppComponent
  },
  {
    path: 'services',
    runGuardsAndResolvers: 'always',
    component: ServicesComponent
  },
  {
    path: 'products',
    runGuardsAndResolvers: 'always',
    component: ProductsComponent
  },
  {
    path: 'login',
    runGuardsAndResolvers: 'always',
    component: LoginComponent
  },
  {
    path: 'register',
    runGuardsAndResolvers: 'always',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
