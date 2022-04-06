import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPersonajePageRoutingModule } from './buscar-personaje-routing.module';

import { BuscarPersonajePage } from './buscar-personaje.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPersonajePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BuscarPersonajePage]
})
export class BuscarPersonajePageModule {}
