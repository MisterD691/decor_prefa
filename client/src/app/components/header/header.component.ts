import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CartService } from 'src/app/services/product/cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public isBig: boolean = true;
  @Input() public title: string = "";
  @Input() public content: string = "";
  public loading: boolean = false;
  public cartItemsQty: number = 0;

  protected user: any;
  
  constructor(
    protected auth: AuthService,
    protected userService: UserService,
    protected router: Router,
    private cartService: CartService
  ) {
    this.user = auth.getUserObject();
  }

  scrollEvent(): void {
    $(window).scroll(function() {
      var scroll = $(document).scrollTop();
      if (scroll != undefined && scroll > 50) {
        $(".fixed-menu").show();
      } else {
        $(".fixed-menu").hide();
      }
    });
  }

  ngOnInit(): void {
    this.scrollEvent();
    this.getCartItemsQty();
  }

  ngOnDestroy(): void {
    $(window).unbind("scroll");
  }

  getCartItemsQty() {
    this.cartItemsQty = this.cartService.getCartCount();
  }

  getTotalItems() {
    return this.cartService.getItemsFromCart().length;
  }

  public logout(): void {
    this.userService.logout();
  }
}
