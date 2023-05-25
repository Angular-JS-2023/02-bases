import { NgModule } from '@angular/core';

import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent,
  ],
  exports: [ // Permitir que el componente pueda ser exportados en otros modulos y aplicacion
    CounterComponent,
  ]
})
export class CounterModule {}