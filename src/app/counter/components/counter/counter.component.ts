import { Component } from '@angular/core';

@Component({
  selector: 'app-counter', // prefijo
  template: `
    <h3>Counter: {{ counter }}</h3>

    <!-- increaseBy() forma de llamar funciones -->
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  constructor() {}

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }

}