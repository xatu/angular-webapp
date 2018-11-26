import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../models/product'
import { Global } from '../../environments/global';

@Injectable()
export class ProductService{
  public url: string;

  constructor(
    public http: HttpClient
  ){
    this.url = Global.url;
  }

  getProduct(id): Observable<any>{
    return this.http.get(this.url+'products/'+id);
  }

  getProducts(): Observable<any>{
    return this.http.get(this.url+'products');
  }

  editProduct(id,product: Product): Observable<any>{
    let json = JSON.stringify(product);
    let params = 'json='+json;
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.put(this.url+'products/'+id, params, httpOptions);
  }

  deleteProduct(id): Observable<any>{
    return this.http.delete(this.url+'products/'+id);
  }

  addProduct(product: Product): Observable<any>{
    let json = JSON.stringify(product);
    let params = 'json='+json;
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(this.url+'products', params, httpOptions);
  }

  onUpload(file: File): Observable<any>{
    let formData = new FormData();
    formData.append('uploads', file, file.name)
    return this.http.post(this.url+'images', formData);
  }

}
