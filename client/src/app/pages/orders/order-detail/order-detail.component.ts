import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderProductService } from 'src/app/services/order_product/order-product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  public orderProds: any[] = [];
  public orderId: string = "";

  constructor(
    private orderProdService: OrderProductService,
    private route: ActivatedRoute,
  ) {
    this.orderId = this.route.snapshot.params['orderId'];
  }

  ngOnInit(): void {
    this.getOrderProds();
  }

  getOrderProds(): void {
    this.orderProdService.getByOrder(this.orderId).subscribe((res) => {
      if (res.datas) {
        this.orderProds = res.datas;
      }
    });
  }

  deleteOrderProd(id?: string) {
    let value = prompt("Souhaitez-vous vraiment supprimer cette commande ?");
    console.log(value);
  }

}
