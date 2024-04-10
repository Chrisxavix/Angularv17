import { Component, Input } from '@angular/core';
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

}
