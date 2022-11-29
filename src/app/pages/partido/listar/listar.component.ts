import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../../../servicios/partido.service';
import Swal from 'sweetalert2';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioPartido: PartidoService, private servicioSeguridad: SeguridadService, private router: Router) { }

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
      lema: {
        title: 'Lema',
        type: 'string',
      },
      nombre: {
        title: 'Nombre',
        type: 'String',
      }
    }
  }
  source = []

  ngOnInit(): void {
    this.servicioSeguridad.getUsuarioPorId(this.servicioSeguridad.usuarioSesionActiva._id).subscribe(
      response => {
        if (response.rol.nombre != "jurado")
          this.router.navigate(["pages/partido/listar"]);
        else
          this.router.navigate(["pages/visualizar-partidos/listar"]);
      }
    )
    this.servicioPartido.listar().subscribe(
      data=> {
        this.source = data;
      }
    )

  }

  deleteConfirm(event){
    let partido_a_eliminar = event.data;
    Swal.fire({
      title: 'Eliminar Partido',
      text: "¿Está seguro que quiere eliminar el partido"+ partido_a_eliminar.nombre + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.servicioPartido.eliminar(partido_a_eliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado',
              'El partido ha sido eliminado correctamente',
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
    let nuevo_partido = event.newData;
    delete nuevo_partido["_id"]
    this.servicioPartido.crear(nuevo_partido).subscribe(
      data => {
        Swal.fire(
        'Creado!',
        'El partido ha sido creado exitosamente',
        'success'
      )
      event.confirm.resolve();
      }
    )
  }

  editConfirm(event){
    let partido_actualizar = event.newData;
    Swal.fire({
      title: 'Actualizar partido',
      text: "¿Está seguro que quiere actualizar el partido "+ partido_actualizar.nombre + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        let id_partido = partido_actualizar["_id"]
        this.servicioPartido.actualizar(partido_actualizar,id_partido).subscribe(
          data=>{
            Swal.fire(
              'Actualizado!',
              'El partido ' + partido_actualizar["nombre"] + ' ha sido actualizado exitosamente',
              'success'
            ); event.confirm.resolve();
          }
        )
      }
    }
    )
  }

}
