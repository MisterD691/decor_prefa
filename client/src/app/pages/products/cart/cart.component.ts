import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Order } from 'src/app/services/order/order';
import { OrderService } from 'src/app/services/order/order.service';
import { OrderProduct } from 'src/app/services/order_product/order-product';
import { OrderProductService } from 'src/app/services/order_product/order-product.service';
import { Cart } from 'src/app/services/product/cart';
import { CartService } from 'src/app/services/product/cart.service';
import { Product } from 'src/app/services/product/product';
import { UserService } from 'src/app/services/user/user.service';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems: Cart[] = [];
  public loading = false;
  protected user: any;
  
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private orderProdService: OrderProductService,
    protected userService: UserService,
    protected auth: AuthService,
  ) {
    this.user = auth.getUserObject();
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartItems = this.cartService.getItemsFromCart();
  }

  getTotalAmount() {
    return this.cartService.getTotalAmount();
  }

  addToCart(item: Product) {
    this.cartService.addItemsToCart(item);
  }

  decrementFromCart(item: Product) {
    this.cartService.decrementFromCart(item);
  }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    this.getCartItems();
  }

  getTotalItems() {
    return this.cartService.getCartCount();
  }

  order() {
    this.loading = true;
    let order: Order = {
      reference: Date.now().toString(),
      clientId: this.user._id,
      responded: false,
      response: false
    }
    this.orderService.create(order).subscribe((res) => {
      if (res.datas) {
        let order = res.datas;
        let items: OrderProduct[] = [];
        this.cartItems.forEach((ci) => {
          let orderProd: OrderProduct = {
            quantity: ci.quantity,
            productId: ci.product._id,
            orderId: order._id
          };
          items.push(orderProd);
        });
        this.cartService.clearCart();
        this.getCartItems();
        this.orderProdService.create(items).subscribe((resp) => {
          this.loading = false;
          if (resp.datas) {
            Notify.success("Commande effectuée avec succès");
          }
        }, (error) => {
          this.loading = false;
          Notify.failure("Erreur lors de l'enregistement");
        });
      }
    });
  }

}
