import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor(private _http$: HttpClient) {}
  getAllProducts() {
    return this._http$.get('../products.json');
  }
}
