import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames: string[] = ["Spiderman", "Hulk", "Tormenta"];
  public deleteHeroe?: string = "";

  removeLastHero(): void {
    this.deleteHeroe = this.heroesNames.pop();
  }

}
