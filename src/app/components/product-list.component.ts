import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'product-list',
  templateUrl: '../views/product-list.html',
  providers: [ProductService]

})
export class ProductListComponent{
  public titulo: string;
  public products: Product[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ){
    this.titulo = 'Listado de productos';
  }

  ngOnInit(){
    console.log('Se ha cargado el componente listado de productos');
    this.productService.getProducts()
      .subscribe( (result: any) => {
        if(result.code != 200) {
          console.log(result);
        } else {
          this.products = result.data;
        }
      }
    );
  }
}
