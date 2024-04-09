import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h1>{{ title }}</h1>
<hr>
<h2>Counter: {{ counter }}</h2>

<button (click)="contador(+1)">+1</button>
<button (click)="resetCounter()">reset</button>
<button (click)="contador(-1)">-1</button>
  `,
})
export class CounterComponent {
  public title: string = 'Counter Component';
  public counter: number = 0;

  contador(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
