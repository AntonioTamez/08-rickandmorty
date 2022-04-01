import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    
    if(value.toUpperCase() === "ALIVE"){
      return 'rm-verde  '
    }

    if(value.toUpperCase() === "DEAD"){
      return 'rm-rojo'
    }
 
    return 'warning' 
  }

}
