import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];
  
  constructor(private http: HttpClient) { }

  // The addToCart() method appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  //The getItems() method collects the items users add to the cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  //The clearCart() method returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }


  // In cart.service.ts, below the clearCart() method, define a new getShippingPrices() method that uses the HttpClient get() method.
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }


}
