import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { ComponentsModule } from '../components.module';



@NgModule({
  declarations: [],
  exports:[
  ],
  imports: [
    CommonModule,
    ComponentsModule, 
  ]
})
export class CharacterModule { }
