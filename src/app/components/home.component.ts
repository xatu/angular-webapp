import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.html'
})
export class HomeComponent {
  public tittle: string;

  constructor(){
    this.tittle = 'Webapp de productos';
  }

  ngOnInit(){
    console.log('Se ha cargado el componente Home');
  }
}
