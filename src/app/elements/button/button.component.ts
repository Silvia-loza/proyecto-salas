import { Component, Input, OnInit, Output } from '@angular/core';
interface button {
  title: string
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
button = {
  title: "Modificar",
  width: "10em"
}
@Input() label: string = "Modificar"
@Input() ancho: string = "10em"
  constructor() { }
  
}
