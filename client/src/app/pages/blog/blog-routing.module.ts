import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    runGuardsAndResolvers: 'always',
    component: BlogListComponent
  },
  {
    path: 'form',
    runGuardsAndResolvers: 'always',
    component: BlogFormComponent
  },
  {
    path: 'form/:articleId',
    runGuardsAndResolvers: 'always',
    component: BlogFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
