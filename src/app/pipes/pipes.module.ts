import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { GenderPipe } from './gender.pipe';



@NgModule({
  declarations: [
    StatusPipe,
    GenderPipe
  ],
  exports:[
    StatusPipe,
    GenderPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
