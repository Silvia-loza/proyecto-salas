import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false

})
export class FilterPipe implements PipeTransform {

  transform(arraySalas: any, capacidad: any): any {
    
    //Filtro capacidad salas
    let result: number[] = [];
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
