import { Component } from '@angular/core';

import {Router} from "@angular/router";
import { ProductRepresentation } from '../Services/api/models/product-representation';
import { ProductsService } from '../Services/api/products/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  product: ProductRepresentation = {};

  constructor(
    private service: ProductsService,
    private router: Router
  ) {
  }

  saveProduct() {
    this.service.CreateProduct(this.product)
      .subscribe({
        next: (result) => {
          this.router.navigate(['products']);
        }
      });
  }
}