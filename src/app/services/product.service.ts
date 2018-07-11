import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
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

  getProducts(){
    return this.http.get(this.url+'products');
  }
}
