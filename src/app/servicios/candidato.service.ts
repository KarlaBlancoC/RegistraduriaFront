import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Candidato[]>{
    return this.clienteHttp.get<Candidato[]>(`${environment.url_api_gateway}/estudiante`)
  }

  eliminar(){}
  
  crear(){}

  actualizar(){}
}
