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
  
  eliminar(){}

  crear(){}

  actualizar(){}
}
