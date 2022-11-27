import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { Mesa } from '../modelos/mesa.model';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Mesa[]>{
    return this.clienteHttp.get<Mesa[]>(`${environment.url_api_gateway}/mesas`)
  }
  
  eliminar(id: string): Observable<Mesa>{
    return this.clienteHttp.delete<Mesa>(`${environment.url_api_gateway}/mesa/${id}`)
  }

  crear(nueva_mesa: Mesa): Observable<Mesa>{
    return this.clienteHttp.post<Mesa>(`${environment.url_api_gateway}/mesa`,nueva_mesa)
  }

  actualizar(){}
}
