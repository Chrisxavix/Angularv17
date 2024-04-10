import { Component } from '@angular/core';
import { Character } from '../Interfaces/character-interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: "Krillin",
      power: 1000
    },
    {
      name: "Goku",
      power: 9.500
    },
    {
      name: "Vegeta",
      power: 300
    }
  ];

  public titleCharacters: string = "Personajes BDZ";

}
