import { Component } from '@angular/core';
import { CartService } from '../common/cart.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any = [];
  totalPrice!: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.cartItems.length);

    this.cartItems = this.cartService.cart;
    this.totalPrice = this.cartService.totalPrice;
  }

  removeFromCart(cartItem: any) {
    this.cartService.removeFromCart(cartItem.id)
    this.cartItems = this.cartService.cart;
  }

  ngDoCheck(){
    this.totalPrice = Math.ceil(this.cartService.totalPrice);
  }
}
