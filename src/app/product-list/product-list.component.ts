import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  errors: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.product_list.subscribe(x => this.products = x);
    this.data.errors.subscribe(x => this.errors = x);
    this.data.get_products();
  }

}
