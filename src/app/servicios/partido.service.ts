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
  
  eliminar(){}

  crear(){}

  actualizar(){}
}
