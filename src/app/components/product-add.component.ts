import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'product-add',
  templateUrl: '../views/product.html',
  providers: [ProductService]
})
export class ProductAddComponent {
  public title: string;
  public button: string;
  public product: Product;
  public filesToUpload;
  public is_edit;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.title = 'Crear nuevo producto';
    this.button = 'Guardar';
    this.product = new Product(0,'','',0,'');
    this.is_edit = false;
  }

  ngOnInit(){
    console.log('Se ha cargado el componente ProductAdd')
  }

  onSubmit(){
    if(this.filesToUpload) {
      this.productService.onUpload(this.filesToUpload).subscribe(
        result => {
              if(result.code != 200) {
                console.log(result);
              } else{
                this.product.image = result.filename;
                this.saveProduct();
              }
            },
        error => {
          console.log(<any>error);
        }
      );
    } else {
      this.saveProduct();
    }
  }

  saveProduct(){
    this.productService.addProduct(this.product).subscribe(
      result => {
        if(result.code != 200) {
          console.log(result);
        } else{
          this.router.navigate(['/product-list']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files[0];
  }

}
