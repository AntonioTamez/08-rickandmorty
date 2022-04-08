import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedFabDirective } from './animated-fab.directive';
import { AnimatedCharacterImageDirective } from './animated-character-image.directive';
import { HideHeaderDirective } from './hide-header.directive';
 



@NgModule({
  declarations: [
    AnimatedFabDirective,
    AnimatedCharacterImageDirective,
    HideHeaderDirective
  ],
  exports: [
    AnimatedFabDirective,
    AnimatedCharacterImageDirective,
    HideHeaderDirective 
  ],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule { }
