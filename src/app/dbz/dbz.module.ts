import { NgModule } from '@angular/core';

// Para el uso de directivas
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para poder usar el [(ngModel)]

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
    CommonModule,
    FormsModule, // Para poder usar el [(ngModel)]
  ],
  exports: [
    DbzMainPageComponent,
  ]
})
export class DbzModule { }
