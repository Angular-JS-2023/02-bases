import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

// root => Es un singleton de forma global en la app
// sino se define se tiene que colocar en el modulo
// en el apartado de providers: [ DbzService ]
@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 },
  ];

  // Evento viene del Hijo
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  // Evento desde el hijo
  onDeleteCharacterById(index: number): void {
    // this.characters = this.characters.filter((character: Character, positionCharacter: number) => positionCharacter !== index);

    this.characters.splice(index, 1); // Eliminar un elemento del arreglo
    // index es la posicion del elemento
    // El 1 son la cantidad a eliminar
  }

}
