import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    BlogComponent,
    BlogFormComponent,
    BlogDetailComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BlogRoutingModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    NgxPaginationModule
  ]
})
export class BlogModule { }
