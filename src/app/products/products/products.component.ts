import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private _ProductsData: ProductsDataService) {}

  ngOnInit(): void {
    // this.products = this._ProductsData.getAllProducts();
    this._ProductsData.getAllProducts().subscribe((productsDat) => {
      this.products = productsDat;
    });
  }
}
