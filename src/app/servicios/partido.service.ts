import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partido } from '../modelos/partido.model';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Partido[]>{
    return this.clienteHttp.get<Partido[]>(`${environment.url_api_gateway}/partidos`)
  }

  buscar_id_nombre(nombre):Observable<Partido[]>{
    
    return this.clienteHttp.post<Partido[]>(`${environment.url_api_gateway}/partido/query`,nombre)
  }

  eliminar(id: string): Observable<Partido>{
    return this.clienteHttp.delete<Partido>(`${environment.url_api_gateway}/partido/${id}`)
  }

  crear(nuevo_partido): Observable<Partido>{
    return this.clienteHttp.post<Partido>(`${environment.url_api_gateway}/partido`,nuevo_partido)
  }
  actualizar(){}
}
