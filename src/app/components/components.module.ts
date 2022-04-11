import { LocationComponent } from './location/location.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { AdvancedHeaderComponent } from './advanced-header/advanced-header.component';


@NgModule({
  entryComponents:[
    CharactersComponent
  ],
  declarations: [
    AdvancedHeaderComponent,
    CharacterComponent,
    CharactersComponent,
    HeaderComponent,
    CardListComponent,
    LocationComponent
  ],
  exports: [
    AdvancedHeaderComponent,
    CharacterComponent,
    CharactersComponent,
    HeaderComponent,
    CardListComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SharedDirectivesModule 
  ]
})
export class ComponentsModule { }
