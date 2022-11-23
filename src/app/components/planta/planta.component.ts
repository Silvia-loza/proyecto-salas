import { ChangeDetectionStrategy, Component, Input, OnInit, Output , OnChanges} from '@angular/core';
import Swal from 'sweetalert2';
import { Planta } from '../../models/Planta';
@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantaComponent implements OnInit {
  @Input() idPlanta !: number;
  public ocupacion !: number;
  public max !: number;
  public selected !: number;
  public planta !: Planta
  public criteria !: any;
  public ocupacionFiltro !: any;
  
  
  public plantaUno : Planta = {
    idPlanta: 1,
    salas :[
    {id: 1, max: 100, ocupacion: 10},
    {id: 2, max: 150, ocupacion: 20},
    {id: 3, max: 100, ocupacion: 50}
  ]
}

public plantaDos : Planta = {
  idPlanta: 2,
  salas : [
    {id: 1, max: 200, ocupacion: 20},
    {id: 2, max: 200, ocupacion: 20},
    {id: 3, max: 200, ocupacion: 20},
    {id: 4, max: 200, ocupacion: 20}
  ]
}

public plantaTres : Planta = {
  idPlanta: 3,
  salas :[
  {id: 1, max: 300, ocupacion: 30},
  {id: 2, max: 300, ocupacion: 30}
  ]
}

constructor() {}

ngOnInit(): void {
    this.planta = this.plantaUno; 
    this.selected = 1;
    this.idPlanta = 1;
  }      
 ngOnChanges(): void { 
    this.onPlantaUpdates();
    parseInt(this.criteria, this.ocupacionFiltro);
  }
    
  successNotification() {
    Swal.fire({
      title: 'Nueva sala añadida con éxito',
      showConfirmButton: false,
      icon: 'success',
      timer: 1000
    });
  }

  borradoNotification() {
    Swal.fire({
      title: 'Sala eliminada con éxito',
      showConfirmButton: false,
      icon: 'warning',
      timer: 1000
    });
  }

  addSala(salas: any): any {
      let id;
      if(!salas.length){
        id = 1;
     } else {
        id = salas[this.planta.salas.length - 1].id + 1;
     }
      this.planta.salas.push({id: id, max: 100, ocupacion: 0});
      this.successNotification();  
   }

   modificarSala(sala: any) :void {
    if(this.planta.idPlanta == 1) {
   //logica para añadir cambios en planta 1
      for (let salaArray of this.plantaUno.salas) {
        if (salaArray.id == sala.id){
          salaArray.ocupacion = sala.ocupacion;
          salaArray.max = sala.max;
        }
      }
       //logica para añadir camios en planta dos
    } else if (this.planta.idPlanta == 2){
       for (let salaArray of this.plantaDos.salas) {
        if (salaArray.id == sala.id){
        salaArray.ocupacion = sala.ocupacion;
        salaArray.max = sala.max;
         } 
       }

    } else if (this.planta.idPlanta == 3) {
    //logica para añadir camios en planta
      for (let salaArray of this.plantaTres.salas) {
       if (salaArray.id == sala.id){
       salaArray.ocupacion = sala.ocupacion;
       salaArray.max = sala.max;
        } 
      }
   }
  }

   onPlantaUpdates(): void {
    if(this.idPlanta == 1){
       this.planta = this.plantaUno
     } else if (this.idPlanta == 2) {
      this.planta = this.plantaDos
     } else {
      this.planta = this.plantaTres
     }
  }

  deleteSala(id :number): any {
    let indexBorrado;

    if(this.planta.idPlanta == 1) {
         for (let salaBorrar of this.plantaUno.salas) { 
           if (salaBorrar.id == id){
                indexBorrado = this.plantaUno.salas.indexOf(salaBorrar)
                this.plantaUno.salas.splice(indexBorrado, 1)
           }
         }
          
    } else if (this.planta.idPlanta == 2){
      for (let salaBorrar of this.plantaDos.salas) { 
        if (salaBorrar.id == id){
             indexBorrado = this.plantaDos.salas.indexOf(salaBorrar)
             this.plantaDos.salas.splice(indexBorrado, 1)
          }
        }           
    } else if (this.planta.idPlanta == 3) {     
      for (let salaBorrar of this.plantaTres.salas) { 
        if (salaBorrar.id == id){
             indexBorrado = this.plantaTres.salas.indexOf(salaBorrar)
             this.plantaTres.salas.splice(indexBorrado, 1)
          }
        }           
      }
      this.borradoNotification();
   }
}
