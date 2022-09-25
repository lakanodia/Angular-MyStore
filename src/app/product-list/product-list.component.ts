import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share(event: Product) {
    window.alert(`The ${event.name} has been shared!`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
