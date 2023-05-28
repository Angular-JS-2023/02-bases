import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // El input es para recibir informacion del padre
  // Esta inicializado con valores por default en caso
  // de que no se envien los datos
  @Input()
  public characterList: Character[] = [
    { id: 'ABC132', name: 'Trunks', power: 10 }
  ];

  @Output()
  public positionCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    if (id === '') return;
    this.positionCharacter.emit(id);
  }

}
