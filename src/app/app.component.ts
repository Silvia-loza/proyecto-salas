import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-salas'
  public numeroPlanta !: number;

  @Output() dataPlanta =  new EventEmitter <any>();

  getPlanta(planta: any) {
    this.dataPlanta.emit(planta);
    this.numeroPlanta = parseInt(planta);
  }
}
