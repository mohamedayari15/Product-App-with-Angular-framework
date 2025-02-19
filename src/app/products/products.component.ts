import {Component, OnInit} from '@angular/core';
import { ProductsService } from '../Services/api/products/products.service';
import { ProductRepresentation } from '../Services/api/models/product-representation';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductRepresentation> = [];

  constructor(
    private service: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.service.GetProductsWithLimit()
      .subscribe({
        next: (result) => {
          this.products = result;
        }
      });

  }

}