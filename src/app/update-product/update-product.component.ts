import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  constructor(private data: DataService) { }

  ngOnInit() {
    //get product from database using params

  }

  updateProduct(event): void {
    event.preventDefault();
    //use data service to update product
  }

}
