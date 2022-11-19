import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { Permiso } from '../modelos/permiso.model';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  constructor(private clienteHttp: HttpClient) { }

  listar():Observable<Permiso[]>{
    return this.clienteHttp.get<Permiso[]>(`${environment.url_api_gateway}/permisos`)
  }

  eliminar(){}

  crear(){}

  actualizar(){}
  
}
