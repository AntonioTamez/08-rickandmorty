import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { GenderPipe } from './gender.pipe';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    StatusPipe,
    GenderPipe,
    FiltroPipe
  ],
  exports:[
    StatusPipe,
    GenderPipe,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
