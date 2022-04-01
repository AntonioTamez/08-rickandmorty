import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedFabDirective } from './animated-fab.directive';
import { AnimatedCharacterImageDirective } from './animated-character-image.directive';



@NgModule({
  declarations: [
    AnimatedFabDirective,
    AnimatedCharacterImageDirective
  ],
  exports: [
    AnimatedFabDirective,
    AnimatedCharacterImageDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule { }
