import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/product/cart';
import { CartService } from 'src/app/services/product/cart.service';
import { Product } from 'src/app/services/product/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public qty: number = 0;
  public cartItems: Cart[] = [];
  
  constructor(
    private cartService: CartService
  ) {}

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
    return this.cartService.getItemsFromCart().length;
  }

}
