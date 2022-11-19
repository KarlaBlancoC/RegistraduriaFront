import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { PermisoRol } from '../modelos/permiso-rol.model';

@Injectable({
  providedIn: 'root'
})
export class PermisoRolService {

  constructor(private clienteHttp: HttpClient) { }

  listar():Observable<PermisoRol[]>{
    return this.clienteHttp.get<PermisoRol[]>(`${environment.url_api_gateway}/permisos-roles`)
  }
}
