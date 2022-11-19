import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';
import Swal from "sweetalert2"

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private serviciosSeguridad: SeguridadService, private router: Router) { }

  usuario?: string
  password?: string

  ngOnInit(): void {
  }

  login(): void {

    let u: Usuario = {
      correo: this.usuario,
      password: this.password
    }
    
    this.serviciosSeguridad.login(u).subscribe(
      data=>{
        this.serviciosSeguridad.guardarDatosSesion(data);
        this.router.navigate(["pages/dashboard"]);
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'Login correcto'
        })
      },
      error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error["error"]["msg"],
          timer: 5000
        })
      }
    )

  }
}
