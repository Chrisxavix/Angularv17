import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../Interfaces/character-interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(
    private character: DbzService,
  ) { }

  get characters(): Character[] {
    return this.character.characters;
  }

  get titleCharacter(): string {
    return this.character.titleCharacters;
  }

  onDeleteCharacter(id: string):void  {
    this.character.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.character.onNewCharacter(character);
  }
}
