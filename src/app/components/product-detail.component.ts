import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'produc-detail',
  templateUrl: '../views/product-detail.html',
  providers: [ProductService]
})
export class ProductDetailComponent {
  public product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    console.log('Product-detail cargado');
    this.getProduct();
  }

  getProduct(){
    this.activatedRoute.params.forEach((params: Params) => {
      let id = params['id'];
      this.productService.getProduct(id).subscribe(
        (result: any) => {
          if(result.code == 200) {
            this.product = result.data[0];
          } else {
            this.router.navigate(['/error']);
            console.log(result);
          }
        }
      );
    });
  }
}
