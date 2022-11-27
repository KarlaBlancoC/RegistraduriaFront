import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private clienteHttp: HttpClient) { }
  
  listar(): Observable<Usuario[]>{
    return this.clienteHttp.get<Usuario[]>(`${environment.url_api_gateway}/usuarios`)
  }

  eliminar(id: string): Observable<Usuario>{
    return this.clienteHttp.delete<Usuario>(`${environment.url_api_gateway}/usuarios/${id}`)
  }
  
  crear(nuevo_usuario): Observable<Usuario>{
    return this.clienteHttp.post<Usuario>(`${environment.url_api_gateway}/usuarios`,nuevo_usuario)
  }

  actualizar(){}
}
