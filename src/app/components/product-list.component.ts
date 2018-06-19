import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: '../views/product-list.html'
})
export class ProductListComponent {
  public titulo: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Listado de productos';
  }

  ngOnInit(){
    console.log('Se ha cargado el componente listado de productos');
  }
}
