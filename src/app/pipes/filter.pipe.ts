import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false

})
export class FilterPipe implements PipeTransform {

  transform(arraySalas: any, max: any): any {
    let result: number[] = [];
    let maxNumber : number = parseInt(max);
    for (const sala of arraySalas) {
      if(!maxNumber) {
        console.log(`no value in search box ${max}`);
        return arraySalas}
      else if(sala.max >= maxNumber){
        console.log(`Seraching for salas with  ${max} capacity or more`);
        result = [...result, sala]
      }
    }
    return result;
  }

}
