import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    
    if(value.toUpperCase() === "ALIVE"){
      return 'pulse-outline'
    }

    if(value.toUpperCase() === "DEAD"){
      return 'skull-outline'
    }
 
    return 'help-outline' 
  }

}
