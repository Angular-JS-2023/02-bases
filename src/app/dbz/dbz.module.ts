import { NgModule } from '@angular/core';

// Para el uso de directivas
import { CommonModule } from '@angular/common';

// Pages
import { DbzMainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    DbzMainPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzMainPageComponent,
  ]
})
export class DbzModule { }
