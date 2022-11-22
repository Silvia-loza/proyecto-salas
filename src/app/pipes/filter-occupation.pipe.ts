import { Pipe, PipeTransform } from '@angular/core';
import { Sala } from '../models/Sala';

@Pipe({
  name: 'filterOccupation',
  pure: false
})
export class FilterOccupationPipe implements PipeTransform {

  transform(arraySalas: Sala[], ocupacion: any): any {
    //Filtro ocupación de salas
   let result: Sala[] = [];
   let ocupacionActual : number = parseInt(ocupacion);
   
   for (const sala of arraySalas) {
     if(!ocupacionActual) {
       
       return arraySalas

     } else if (sala.ocupacion >= ocupacionActual) {
      
       result = [...result, sala]

     }
   }
   return result;
 }

}
