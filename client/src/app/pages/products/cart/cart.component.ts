import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public qty: number = 0;

  addQty(): void {
    this.qty += 1;
  }

  reduceQty(): void {
    this.qty -= 1;
  }

  removeItem(): void {
    alert("Btn clicked");
  }

}
