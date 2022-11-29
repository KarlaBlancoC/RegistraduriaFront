import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { Resultado } from '../modelos/resultado.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Resultado[]>{
    return this.clienteHttp.get<Resultado[]>(`${environment.url_api_gateway}/resultados`)
  }
  
  eliminar(id: string): Observable<Resultado>{
    return this.clienteHttp.delete<Resultado>(`${environment.url_api_gateway}/resultado/${id}`)
  }

  crear(nuevo_resultado: Resultado): Observable<Resultado>{
    return this.clienteHttp.post<Resultado>(`${environment.url_api_gateway}/resultado`,nuevo_resultado)
  }

  actualizar(resultado_actualizar: Resultado, id: String): Observable<Resultado>{
    return this.clienteHttp.put<Resultado>(`${environment.url_api_gateway}/resultado/${id}`,resultado_actualizar)
  }
}
