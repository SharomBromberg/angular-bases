import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name:string ='Iron Man';
  public age: number = 45;
  public method: string = 'a Method'

  get capitalizedName(): string {
    return this.name.toUpperCase(); // existe un pipe que hace esto y me evita todo este codigo
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age}`;
  }

  changeHero():void{
    this.name='SpiderMan';

  }

  changeAge(): void{
    this.age=25;
  }

  resetForm(): void {

    this.name= 'Iron Man';
    this.age = 45;

  }
}
