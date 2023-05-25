import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string; // variable opcional ?
  
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop(); // Elimina el ultimo elemento de la lista
  }

}
