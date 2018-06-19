import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../models/product'
import { Global } from '../../environments/global';

@Injectable()
export class ProductService{
  public url: string;

  constructor(){
    this.url = Global.url;
  }
}
