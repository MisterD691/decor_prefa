import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    BlogComponent,
    BlogFormComponent,
    BlogDetailComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
