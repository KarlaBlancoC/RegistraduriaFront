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
        console.log(data)
        this.serviciosSeguridad.guardarDatosSesion(data);
        this.serviciosSeguridad.getUsuarioPorId(data.user_id).subscribe(
          response => {
            if(response.rol.nombre === "Administrador")
              this.router.navigate(["pages/resultado/listar"])
            else
              if(response.rol.nombre === "Jurado")
                this.router.navigate(["pages/resultado/listar"])
              else
               this.router.navigate(["pages/resultado/listar"])
          }
        )
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
