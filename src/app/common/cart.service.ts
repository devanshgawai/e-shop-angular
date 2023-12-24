import { Injectable } from '@angular/core';
import { ResponseConfig } from '../shop/shop.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = [];
  totalPrice!: number;
  totalNumberOfItems!: number;


  constructor() { }

  addToCart(item: any) {
    const existingItem = this.cart.find((cartItem: any) => {
      return cartItem.id === item.id
    })

    if (existingItem) {
      existingItem['numberOfItems'] = existingItem['numberOfItems'] + 1;
      existingItem['totalPrice'] = existingItem['numberOfItems'] * existingItem["price"];
    } else {
      item['numberOfItems'] = 1;
      item['totalPrice'] = item['price'];
      this.cart.push(item);
    }

    const totalNumberOfItems = this.cart.reduce((acc: number, cartItem: any) => acc + cartItem.numberOfItems, 0)
    const totalPrice = this.cart.reduce((acc: number, cartItem: any) => acc + cartItem.totalPrice, 0)
    this.totalPrice = Math.ceil(totalPrice);
    this.totalNumberOfItems = totalNumberOfItems;
  }

  removeFromCart(id: number) {
    const existingItem = this.cart.find((cartItem: any) => cartItem.id === id);
    if (existingItem) {
      if (existingItem['numberOfItems'] >= 1) {
        existingItem['numberOfItems'] = existingItem['numberOfItems'] - 1;
        existingItem['totalPrice'] = existingItem['numberOfItems'] * existingItem["price"];
      }
      if (existingItem['numberOfItems'] === 0) {
        this.cart = this.cart.filter((cartItems: any) => cartItems.id !== id)
      }
    }
    this.totalNumberOfItems = this.cart.reduce((acc: number, cartItem: any) => acc + cartItem.numberOfItems, 0)
    this.totalPrice = this.cart.reduce((acc: number, cartItem: any) => acc + cartItem.totalPrice, 0);
  }
  
}
