import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'bases';
  public title: string  ='Hola mundo'
  public counter: number = 10;

  increaseBy ( value: number):void {
    this.counter +=value;
  }

  /*decreaseBy ():void {
    this.counter -=1;
  }*/

  resetCouunter (): void {
    this.counter = 10;
  }

}
