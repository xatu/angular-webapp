import { Component } from '@angular/core';
import { Global } from '../environments/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Productos';
  public header_color: string;

  constructor(){
    this.header_color = Global.header_color;
  }
}
