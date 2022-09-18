import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public nombrePlanta !: string;
  public selected !: number;
  public placeholder : string ="Salas"
  public idPlanta !: number;
  @Output() newPlantaEvent = new EventEmitter<string>();

  constructor() {
    this.selected = 1
   }

  ngOnInit(): void {
  }

  onSubmit(values: any): void {
    this.nombrePlanta = values;
    this.newPlantaEvent.emit(this.nombrePlanta);
  }

}
