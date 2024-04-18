import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { OrderService } from 'src/app/services/order/order.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders: any[] = [];
  public ordersData: any[] = [];
  public selectedCatId: string = "";
  protected role: string = "";

  constructor(
    private orderService: OrderService,
    protected auth: AuthService,
  ) {
    this.role = auth.getRole();
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getAll().subscribe((res) => {
      if (res.datas) {
        this.ordersData = res.datas;
        this.orders = res.datas;
      }
    });
  }

  deleteOrder(id?: string) {
    let value = prompt("Souhaitez-vous vraiment supprimer cette commande ?");
    console.log(value);
  }

  research(event: any): void {
    let value = event.target.value.toLowerCase();
    if (value != "") {
      this.orders = this.ordersData.filter((order) => (order.reference.toLowerCase().includes(value) || order.client.lastName.toLowerCase().includes(value) || order.client.firstName.toLowerCase().includes(value)));
    } else {
      this.orders = this.ordersData;
    }
  }
}
