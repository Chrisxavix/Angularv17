import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public title:       string = "Componente Hero";
  public name:        string = "iroman";
  public age:          number = 10;
  public changename:  boolean = false;
  public arrayName:   string[] = ["Chris", "Daniel"];

  getName(): void {
    this.name;
  }

  getAge(): void {
    this.age;
  }

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  setName(name: string): void  {
    this.name = name;
    this.changename = true;
  }

  setAge(age: number): void  {
    this.age = age;
  }

  setData(name: string, age: number): void {
    this.name = name;
    this.age = age;
  }

  reset(): void {
    this.name = "iroman";
    this.age = 10;
    this.changename = false;
  }

}
