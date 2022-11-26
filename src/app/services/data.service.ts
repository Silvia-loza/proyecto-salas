import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sala } from '../models/Sala';
import { environment } from 'src/environments/environment';
import { Planta } from '../models/Planta';





@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly API = environment.api;

  constructor(private readonly http: HttpClient) { }
  addNewSala(salas: any): Observable <Sala> {
    let id;
    if(!salas.length){
        id = 1;
    } else {
        id = salas[salas.length - 1].id + 1;
     }

    const body = { 
                   id: 9,
                   max: 100,
                   ocupacion: 0
                  }
    return this.http.post<Sala>(this.API, body)
   }

  getSalas(): Observable <Planta[]> {
    return this.http.get<Planta[]>(this.API)
   }
   
  updateSala(sala: Sala):Observable <Sala> {
    const body = {
       max: sala.max,
       ocupacion: sala.ocupacion}
    return this.http.put<Sala>(`${this.API}/${sala.id}`, body)
   }
  deleteSala(id: any):Observable <void> { 
    console.log('borrado en servicio')
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
