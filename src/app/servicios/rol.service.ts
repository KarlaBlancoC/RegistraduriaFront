import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { Rol } from '../modelos/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Rol[]>{
    return this.clienteHttp.get<Rol[]>(`${environment.url_api_gateway}/roles`)   
  }

  eliminar(){}

  crear(){}

  actualizar(){}
}
