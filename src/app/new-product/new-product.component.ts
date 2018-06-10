import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product: Product;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.product = new Product();
  }

  newProduct(event: any): void{
    event.preventDefault();
    //use data service to add product to list
    this.data.add_product(this.product);
    this.router.navigate(['']);
  }

  resetForm(event: any): void{
    event.preventDefault();
    this.product = new Product();
  }

}
