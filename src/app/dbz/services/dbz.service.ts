import { Injectable } from '@angular/core';

// Al instalar el uuid con => npm i uuid y querer importarlo en ts va a fallar
// Hacerle un hover para ver el nuevo comando para instalarlo en ts
import { v4 as uuid } from 'uuid';
// console.log({ id: uuid() });

import { Character } from '../interfaces/character.interface';

// root => Es un singleton de forma global en la app
// sino se define se tiene que colocar en el modulo
// en el apartado de providers: [ DbzService ]
@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  // Evento viene del Hijo
  onNewCharacter(character: Character): void {
    // const newCharacter: Character = { id: uuid(), name, power }
    const newCharacter: Character = { ...character, id: uuid() }
    this.characters.push(newCharacter);
  }

  // Evento desde el hijo
  // onDeleteCharacterById(index: number): void {
    // this.characters = this.characters.filter((character: Character, positionCharacter: number) => positionCharacter !== index);

    // this.characters.splice(index, 1); // Eliminar un elemento del arreglo
    // index es la posicion del elemento
    // El 1 son la cantidad a eliminar
  // }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character: Character) => character.id !== id);
  }

}
