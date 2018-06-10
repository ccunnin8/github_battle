import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(private data: DataService, private router: ActivatedRoute, private route: Router) {
    this.data.product.subscribe(x => this.product = x);
  }

  ngOnInit() {

    this.router.paramMap.subscribe(params => this.data.get_product(params.get('id') ));
  }

  delete() {
    console.log("delete item");
    this.data.delete_product(this.product['_id']);
    this.route.navigate(['']);
  }
}
