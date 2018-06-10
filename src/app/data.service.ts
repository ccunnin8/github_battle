import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from './product';
@Injectable()
export class DataService {
  product_list: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  product: Subject<Product> = new Subject<Product>();
  api_url: string = "api/products";
  errors: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) { }

  get_products(){
    this.http.get(this.api_url).subscribe(data => this.product_list.next(data));
  }

  add_product(product){
    this.http.post(this.api_url,product).subscribe(res => {
      if (res['error']){
        this.errors.next(res['error']);
      } else {this.get_products() }
    });
  }

  get_product(id){
    return this.http.get(`${this.api_url}/${id}`).subscribe(data => {
      let product = new Product();
      product['_id'] = data['_id'];
      product['name'] = data['name'];
      product['qty'] = data['qty'];
      product['price'] = data['price'];
      this.product.next(product);
    });
  }

  update_product(id,product) {
    this.http.put(`${this.api_url}/${id}`,product).subscribe(data => {
      if (data['error']) {
        this.errors.next(data['error']);
      }
      else { this.get_products() }
    });
  }

  delete_product(id) {
    this.http.delete(`${this.api_url}/${id}`).subscribe(data => this.get_products());
  }
}
