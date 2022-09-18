import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sala } from 'src/app/models/Sala';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent {
@Input () salaId !: number;
@Input () max !: number;
@Input () ocupacion !: number;
@Input () sala !: Sala

@Output() nuevaOcupacion =  new EventEmitter <any>();

  modificarSala(sala: any) {
    this.nuevaOcupacion.emit(sala);
  }

}
