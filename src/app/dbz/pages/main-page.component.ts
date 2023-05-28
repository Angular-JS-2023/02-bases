import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainPageComponent {

  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(newCharacter: Character): void {
    this.dbzService.addCharacter(newCharacter);
  }

}
