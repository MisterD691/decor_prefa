import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderRoutingModule } from './orders-routing.module';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    OrderRoutingModule,
    NgxLoadingModule.forRoot({})
  ]
})
export class OrdersModule { }
