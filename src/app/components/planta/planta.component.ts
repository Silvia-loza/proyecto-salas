import { ChangeDetectionStrategy, Component, Input, OnInit, Output , OnChanges} from '@angular/core';
import { Sala } from 'src/app/models/Sala';
import { DataService } from 'src/app/services/data.service';
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
  public planta !: Planta;
  public criteria !: any;
  public ocupacionFiltro !: any;
  public plantas : Planta[] = [];
  public plantaUno : Planta = {idPlanta: 0, salas: [{id: 0, max: 0, ocupacion: 0}]};
  public plantaDos : Planta =  {idPlanta: 0, salas: [{id: 0, max: 0, ocupacion: 0}]};
  public plantaTres : Planta = {idPlanta: 0, salas: [{id: 0, max: 0, ocupacion: 0}]};
  public data !: any;

constructor(private readonly dataSvc: DataService) {}

ngOnInit(): void {

  //Petición a API
  console.log(this.plantas)
  this.dataSvc.getSalas()
  .subscribe(res => {
      this.data = [...res];
      this.plantas = this.data;
      this.plantas.map(planta => { 
        if(planta.idPlanta == 1){
          this.plantaUno = planta
          this.planta = this.plantaUno;
        } else if (planta.idPlanta == 2)
        {this.plantaDos = planta;
        } else { 
          this.plantaTres = planta
        }
       
        // this.selected = 1;
        // this.idPlanta = 1;
      }) 
        // this.assignaPlanta(this.plantas)
  })
    
  }      
 ngOnChanges(): void { 
    this.onPlantaUpdates();
    parseInt(this.criteria, this.ocupacionFiltro);  
  }

  assignaPlanta (plantas: Planta[]) {

    this.planta = this.plantaUno;
    this.selected = 1;
    this.idPlanta = 1;

     for (let planta of plantas) {
        if (planta.idPlanta == 1) {
          this.plantaUno = planta
        } else if(planta.idPlanta == 2) {
          this.plantaDos = planta
        } else {
          this.plantaTres = planta
        }
    }
    console.log(plantas)
    // this.planta = this.plantaUno; 
    // this.selected = 1;
    // this.idPlanta = 1;
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

  
  modificarSalaSuccessNotification() {
    Swal.fire( {title: 'Cambios guardados!',
      showConfirmButton: false,
      icon: 'success',
      timer: 1000
    }
  );
 }
  

  async addSala(salas: any): Promise<any> {
  
    await this.dataSvc.addNewSala(salas).subscribe(res => {
      this.planta.salas.push(res);
      this.successNotification();  
     })
     
      
   }

   async modificarSala(sala: Sala) :Promise<void> {
    if(this.planta.idPlanta == 1) {
   //logica para añadir cambios en planta 1
      for (let salaArray of this.plantaUno.salas) {
        if (salaArray.id == sala.id){

         await  this.dataSvc.updateSala(sala).subscribe(res => {
          console.log('res en planta 1')
          console.log(res)
            salaArray.ocupacion = res.ocupacion
            salaArray.max = res.max;
            this.modificarSalaSuccessNotification();  
          })
        }
      }
       //logica para añadir camios en planta dos
    } else if (this.planta.idPlanta == 2){
       for (let salaArray of this.plantaDos.salas) {
        if (salaArray.id == sala.id){
        await  this.dataSvc.updateSala(sala).subscribe(res => {
               console.log('res en planta 2')
               console.log(res)
              salaArray.ocupacion = res.ocupacion
              salaArray.max = res.max;
              this.modificarSalaSuccessNotification();  
          })
         } 
       }

    } else if (this.planta.idPlanta == 3) {
    //logica para añadir camios en planta
      for (let salaArray of this.plantaTres.salas) {
       if (salaArray.id == sala.id){
       await  this.dataSvc.updateSala(sala).subscribe(res => {
            console.log('res en planta 3')
            console.log(res)
            salaArray.ocupacion = res.ocupacion
            salaArray.max = res.max;
            this.modificarSalaSuccessNotification();  
          })
        } 
      }
   }

  //  this.dataSvc.updateSala(sala).subscribe(res => {})
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

   async deleteSala(idPlanta : number, idSala : number): Promise<any> {

    await this.dataSvc.deleteSala(idPlanta).subscribe(() => {
   
    console.log('borrado en planta')
    if(idPlanta == 1) {

      const tempArray = this.plantaUno.salas.filter(sala => sala.id != idSala)
      this.plantaUno.salas = [...tempArray]
          
    } else if (idPlanta == 2) {

      const tempArray = this.plantaDos.salas.filter(sala => sala.id != idSala)
      this.plantaDos.salas = [...tempArray]
   
    } else if (idPlanta == 3) {     

      const tempArray = this.plantaTres.salas.filter(sala => sala.id != idSala)
      this.plantaTres.salas = [...tempArray]
    }
      this.borradoNotification();
    })
   
   }
}
