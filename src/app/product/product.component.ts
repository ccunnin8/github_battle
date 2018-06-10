import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(private data: DataService) { }

  ngOnInit() {
    //get id from params
    //get product data from api
  }

  delete() {
    console.log("delete item");
    //use data service to delete product 
  }
}
