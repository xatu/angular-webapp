import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'product-edit',
  templateUrl: '../views/product.html',
  providers: [ProductService]
})
export class ProductEditComponent {
  public title: string;
  public button: string;
  public product: Product;
  public filesToUpload;
  public is_edit;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.title = 'Editar producto';
    this.button = 'Editar'
    this.product = new Product(1,'','',1,'');
    this.is_edit = true;
  }

  ngOnInit(){
    this.getProduct();
  }

  onSubmit(){
    if(this.filesToUpload) {
      this.productService.onUpload(this.filesToUpload).subscribe(
        result => {
              if(result.code != 200) {
                console.log(result);
              } else{
                this.product.image = result.filename;
                this.updateProduct();
              }
            },
        error => {
          console.log(<any>error);
        }
      );
    } else {
      this.updateProduct();
    }
  }

  updateProduct(){
    this.activatedRoute.params.forEach((params: Params) => {
      let id = params['id'];
      this.productService.editProduct(id,this.product).subscribe(
        result => {
          if(result.code != 200) {
            console.log(result);
          } else{
            this.router.navigate(['/product',id]);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files[0];
  }

  getProduct(){
    this.activatedRoute.params.forEach((params: Params) => {
      let id = params['id'];
      this.productService.getProduct(id).subscribe(
        result => {
          if(result.code == 200) {
            this.product = result.data[0];
          } else {
            this.router.navigate(['/error']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}
