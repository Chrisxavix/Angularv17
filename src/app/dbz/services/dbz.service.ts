import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character-interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9.500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 300
    }
  ];

  public titleCharacters: string = "Personajes BDZ";

  onNewCharacter(character: Character): void {

    /* En vez de lo comentado se usa los 3 puntos, se van agregando las propiedades */
    /* const newCharacter:Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    } */

    const newCharacter:Character = { id: uuid(), ...character }
    console.log("MainPage");
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  deleteCharacterById(indexCharacter: string): void {
    /* console.log("Principal");
    this.characters.splice(indexCharacter, 1) */
    this.characters = this.characters.filter( character => character.id !== indexCharacter)
  }

}
