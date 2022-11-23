import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sala } from '../models/Sala';
import { environment } from 'src/environments/environment';
import { Planta } from '../models/Planta';
// export interface Sala {
  // id: number,
  // max: number,
  // ocupacion: number,

//}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly API = environment.api;

  constructor(private readonly http: HttpClient) { }
  addNewSala(id: number): Observable <Sala> {
    const body = { 
                   id: id,
                   max: 100,
                   ocupacion: 0
                  }
    return this.http.post<Sala>(this.API, body)
   }
  getSalas(): Observable <Planta[]> {
    return this.http.get<Planta[]>(this.API)
   }
  updateSala(sala: Sala):Observable <void> {
    const body = {id: sala.id}
    return this.http.put<void>(`${this.API}/${sala.id}`, body)
   }
  deleteSala(id: any):Observable <void> { 
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
