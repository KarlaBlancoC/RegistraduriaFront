import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../../servicios/mesa.service';
import Swal from 'sweetalert2';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioMesa: MesaService, private servicioSeguridad: SeguridadService,
    private router: Router) { }

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
      cedulas_registradas: {
        title: 'Cédulas registradas',
        type: 'number',
      }
    }
  }
  source = []

  ngOnInit(): void {
    this.servicioSeguridad.getUsuarioPorId(this.servicioSeguridad.usuarioSesionActiva._id).subscribe(
      response => {
        if (response.rol.nombre != "jurado")
          this.router.navigate(["pages/mesa/listar"]);
        else
          this.router.navigate(["pages/visualizar-mesas/listar"]);
      }
    )
    this.servicioMesa.listar().subscribe(
      data=> {
        this.source = data;
      }
    )
  }

  deleteConfirm(event){
    let mesa_a_eliminar = event.data;
    Swal.fire({
      title: 'Eliminar mesa',
      text: "¿Está seguro que quiere eliminar la mesa "+ mesa_a_eliminar._id + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.servicioMesa.eliminar(mesa_a_eliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado',
              'La mesa ha sido eliminada correctamente',
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
    let nueva_mesa = event.newData;
    delete nueva_mesa["_id"]
    this.servicioMesa.crear(nueva_mesa).subscribe(
      data => {
        Swal.fire(
        'Creada!',
        'La mesa ha sido creada exitosamente',
        'success'
      )
      event.confirm.resolve();
      }
    )
  }

  editConfirm(event){
    let mesa_actualizar = event.newData;
    Swal.fire({
      title: 'Actualizar mesa',
      text: "¿Está seguro que quiere actualizar la mesa "+ mesa_actualizar._id + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        let id_mesa = mesa_actualizar["_id"]
        this.servicioMesa.actualizar(mesa_actualizar,id_mesa).subscribe(
          data=>{
            Swal.fire(
              'Actualizada!',
              'La mesa ' + mesa_actualizar["_id"] + ' ha sido actualizada exitosamente',
              'success'
            ); event.confirm.resolve();
          }
        )
      }
    }
    )
  }
}