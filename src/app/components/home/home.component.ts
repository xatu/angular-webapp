import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})
export class HomeComponent {
  public title: string;

  constructor(){
    this.title = 'Webapp de productos';
  }

  ngOnInit(){
    console.log('Se ha cargado el componente Home');
  }
}
