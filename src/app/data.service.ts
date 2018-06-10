import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';
@Injectable()
export class DataService {
  product_list: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  api_url: string = "api/products";

  constructor(private http: HttpClient) { }

  get_products(){
    this.http.get(this.api_url).subscribe(data => this.product_list.next(data));
  }

}
