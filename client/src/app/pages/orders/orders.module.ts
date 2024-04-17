import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
