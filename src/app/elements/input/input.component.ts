import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Planta } from 'src/app/models/Planta';
import { Sala } from 'src/app/models/Sala';
import Swal from 'sweetalert2';

interface inputForm {
  "max": number,
  "ocupacion": number
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() borrarSalaEv = new EventEmitter <any>();
  @Output() modificarSalas = new EventEmitter <any>();
  @Input () max !: number;
  @Input () ocupacion !: number;
  @Input () id !: number;
  @Input() maxLabel : string = 'Capacidad máxima';
  @Input() ocupaLabel : string = 'Ocupación';
  @Input() planta !: Planta;
  @Input() sala : Sala = {id: 1,max: 100, ocupacion: 10}

  public salaModificar :Sala = {
    id: 1,
    max: 100, 
    ocupacion: 10
   }

  constructor() { }
   successNotification() {
      Swal.fire( {title: 'Cambios guardados!',
        showConfirmButton: false,
        icon: 'success',
        timer: 1000
      }
    );
   }
  
  
  
  
  modificarSala(id: number, ocupacion: number, max: number): void {
    this.salaModificar.id = id;
    this.salaModificar.ocupacion = ocupacion;
    this.salaModificar.max = max;
    this.modificarSalas.emit(this.salaModificar);
    this.successNotification();
  }

  borrarSala (id: number): void {
    this.borrarSalaEv.emit(id);
  }

}
