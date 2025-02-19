import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Services/api/products/products.service';
import { ProductRepresentation } from '../Services/api/models/product-representation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    param: any;
    params: any;

    constructor(private ActivatedRoute : ActivatedRoute, private service : ProductsService){
      console.log(ActivatedRoute);
      this.param = this.ActivatedRoute.snapshot.params['username'];
      this.params = this.ActivatedRoute.snapshot.queryParams['course'];
    }

    ngOnInit()
    {
      const product : ProductRepresentation = {
        title : 'hama'
      }
      this.service.CreateProduct(product).subscribe((result)=>{
        console.log(result)
      })
    }
}
