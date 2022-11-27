import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../servicios/usuario.service';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioUsuario: UsuarioService) { }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate : true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'ID',
        type: 'string',
        editable: false,
        addable: false,
      },
      seudonimo: {
        title: 'Seudónimo',
        type: 'string',
      },
      correo: {
        title: 'Correo',
        type: 'number',
      }
    }
  }
  source = []

  ngOnInit(): void {
    this.servicioUsuario.listar().subscribe(
      data=> {
        this.source = data;
      }
    )
  }

  deleteConfirm(event){
    let usuario_a_eliminar = event.data;
    Swal.fire({
      title: 'Eliminar Usuario',
      text: "¿Está seguro que quiere eliminar el usuario"+ usuario_a_eliminar.seudonimo + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.servicioUsuario.eliminar(usuario_a_eliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado',
              'El usuario ha sido eliminado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    }      
    )
  }

  createConfirm(event){
    event.confirm.rejet();
  }

  editConfirm(event){}

}
