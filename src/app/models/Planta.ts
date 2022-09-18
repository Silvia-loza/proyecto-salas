export class Planta {

    constructor(
      public idPlanta: number,
      public salas: { id: number, max: number, ocupacion: number }[]
    ) {  }
  
  }