import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  entryComponents:[
    CharactersComponent
  ],
  declarations: [
    CharacterComponent,
    CharactersComponent,
    HeaderComponent,
    CardListComponent
  ],
  exports: [
    CharacterComponent,
    CharactersComponent,
    HeaderComponent,
    CardListComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
