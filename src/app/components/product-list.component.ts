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
  public title: string;
  public products: Product[];
  public confirm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ){
    this.title = 'Listado de productos';
    this.confirm = null;
  }

  ngOnInit(){
    console.log('Se ha cargado el componente ProductList');
    this.getProducts();
  }


  getProducts(){
    this.productService.getProducts().subscribe(
      (result: any) => {
        if(result.code != 200) {
          console.log(result);
        } else {
          this.products = result.data;
        }
      }
    );
  }

  deleteConfirm(id) {
    this.confirm = id;
  }

  cancelConfirm(){
    this.confirm = null;
  }

  onDeleteProduct(id){
    this.productService.deleteProduct(id).subscribe(
      (result: any) => {
        if(result.code != 200) {
          console.log('Error al borrar producto');
        } else {
          this.getProducts();
        }
      }
    );
  }

}
