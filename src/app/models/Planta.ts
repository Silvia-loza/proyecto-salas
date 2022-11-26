import { Sala } from "./Sala";

export class Planta {

    constructor(
      public idPlanta: number,
      public salas: Sala []
    ) { 
      this.idPlanta = 0;
      this.salas = [];
     }
  }