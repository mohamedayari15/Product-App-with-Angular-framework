import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BaseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {

    

   }

   GetProductsWithLimit(limit: number = 10){
    const productsUrl = `${this.BaseUrl}` + 'products?limit=' + `${limit}`;
    return this.http.get<ProductRepresentation[]>(productsUrl)
   }

   CreateProduct(Product : ProductRepresentation){
    const productsUrl = `${this.BaseUrl}` + 'products';
    return this.http.post(productsUrl, Product) 
   }
}
