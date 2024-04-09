import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

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
    component: AppComponent
  },
  {
    path: 'products',
    runGuardsAndResolvers: 'always',
    component: AppComponent
  },
  {
    path: 'login',
    runGuardsAndResolvers: 'always',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
