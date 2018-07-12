import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'product-add',
  templateUrl: '../views/product-add.html',
  providers: [ProductService]
})
export class ProductAddComponent {
  public title: string;
  public product: Product;
  public filesToUpload;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.title = 'Crear nuevo producto';
    this.product = new Product(0,'','',0,'');
  }

  ngOnInit(){
    console.log('Se ha cargado el componente ProductAdd')
  }

  onSubmit(){
    if(this.filesToUpload) {
      this.productService.onUpload(this.filesToUpload)
            .subscribe((result:any)=> {
              if(result.code != 200) {
                console.log(result);
              } else{
                this.product.image = result.filename;
                this.saveProduct();
              }
            }
      );
    } else {
      this.saveProduct();
    }
  }

  saveProduct(){
    this.productService.addProduct(this.product)
      .subscribe((result: any) => {
        if(result.code != 200) {
          console.log(result);
        } else{
          this.router.navigate(['/product-list']);
        }
      }
    );
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files[0];

  }

}
