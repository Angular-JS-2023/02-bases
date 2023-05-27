import { NgModule } from '@angular/core';

// Para el uso de directivas
import { CommonModule } from '@angular/common';

// Pages
import { DbzMainPageComponent } from './pages/main-page.component';

// Components
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzMainPageComponent,
  ]
})
export class DbzModule { }
