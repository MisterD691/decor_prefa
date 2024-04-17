import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Cart[] = [];
  private totalAmount: number = 0;

  constructor(private router: Router) { }

  addItemsToCart(item: Product) {
    let exists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].product._id === item._id) {
        this.cartItems[i].quantity += 1;
        exists = true;
        this.getTotalAmount();
        break;
      }
    }

    if (!exists) {
      this.cartItems.push({product: item, quantity: 1});
      this.getTotalAmount();
    }
  }

  getTotalAmount(): any {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item) => {
        this.totalAmount += (item.quantity * item.product.price);
      });
      return this.totalAmount;
    }
  }

  getItemsFromCart() {
    return this.cartItems;
  }

  getCartCount(): any {
    if (this.cartItems) {
      let count = 0;
      this.cartItems.forEach((item) => {
        count += item.quantity;
      });
      return count;
    }
  }

  clearCart() {
    this.cartItems = [];
    this.router.navigate(['']);
  }

  removeFromCart(prod: Product) {
    this.cartItems = this.cartItems.filter((item) => item.product._id !== prod._id);
    if (this.cartItems.length === 0) {
      this.router.navigate(['']);
    }
    this.getTotalAmount();
  }

  decrementFromCart(prod: Product) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].product._id === prod._id) {
        if (this.cartItems[i].quantity > 0) {
          this.cartItems[i].quantity -= 1;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.getTotalAmount();
  }
}
