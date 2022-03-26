import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    

    if(value.toUpperCase()==="FEMALE"){
      return "woman-outline";
    }
    
    if(value.toUpperCase()==="MALE"){
      return "man-outline";
    }

    if(value.toUpperCase()==="UNKNOW"){
      return "help-outline";
    }

    return "transgender-outline";

  }

}
