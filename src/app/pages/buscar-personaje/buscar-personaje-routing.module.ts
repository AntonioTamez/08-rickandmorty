import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPersonajePage } from './buscar-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPersonajePageRoutingModule {}
