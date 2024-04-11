import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../Interfaces/character-interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Input()
  public title: string = "Sin Título";

  @Output()
  onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  onDeleteCharacterIndex(indexCharacter: number): void {
    console.log(indexCharacter);
    this.onDeleteCharacter.emit(indexCharacter);
  }

}
