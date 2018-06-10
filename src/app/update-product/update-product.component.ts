import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  constructor(private data: DataService, private router: ActivatedRoute, private route: Router) {
    this.data.product.subscribe(x => this.product = x);
  }

  ngOnInit() {
    //get product from database using params
    this.router.paramMap.subscribe((params)=>{
      this.data.get_product(params.get('id'));
    });
  }

  updateProduct(event): void {
    event.preventDefault();
    this.data.update_product(this.product['_id'],this.product);
    this.route.navigate(['']);
  }

}
