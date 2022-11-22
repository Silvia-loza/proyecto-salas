import { Pipe, PipeTransform } from '@angular/core';
import { Sala } from '../models/Sala';

@Pipe({
  name: 'filter',
  pure: false

})
export class FilterPipe implements PipeTransform {

  transform(arraySalas: Sala[], capacidad: any): any {
    
    //Filtro capacidad salas
    let result: Sala[] = [];
    let maxCapacidad : number = parseInt(capacidad);
    
    for (const sala of arraySalas) {
      if(!maxCapacidad) {
       
        return arraySalas

      } else if(sala.max >= maxCapacidad) {
       
        result = [...result, sala]
      }
    }
    return result;
  }

}
