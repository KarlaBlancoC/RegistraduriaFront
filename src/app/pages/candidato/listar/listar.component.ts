import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partido } from '../../../modelos/partido.model';
import { CandidatoService } from '../../../servicios/candidato.service';
import { PartidoService } from '../../../servicios/partido.service';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioCandidato: CandidatoService, private servicioPartido: PartidoService,
    private servicioSeguridad: SeguridadService, private router: Router) { }

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
      resolucion: {
        title: 'Resolución',
        type: 'string',
      },
      cedula: {
        title: 'Cédula',
        type: 'number',
      },
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
      apellido: {
        title: 'Apellido',
        type: 'string',
      },
      partido:{
          title: 'Partido',
          type: 'string',
      }
    }
  }
  source = []
  

  ngOnInit(): void {
    this.servicioSeguridad.getUsuarioPorId(this.servicioSeguridad.usuarioSesionActiva._id).subscribe(
      response => {
        if (response.rol.nombre != "jurado")
          this.router.navigate(["pages/candidato/listar"]);
        else
          this.router.navigate(["pages/visualizar-candidatos/listar"]);
      }
    )
    this.servicioCandidato.listar().subscribe(
      data=> {
        this.source = data;
      }
    )
  }

  deleteConfirm(event){
    let candidato_a_eliminar = event.data;
    Swal.fire({
      title: 'Eliminar Candidato',
      text: "¿Está seguro que quiere eliminar al candidato "+ candidato_a_eliminar.nombre + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.servicioCandidato.eliminar(candidato_a_eliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado',
              'El candidato ha sido eliminado correctamente',
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
    let nuevo_candidato = event.newData;
    let nombre_partido = nuevo_candidato["partido"]
    delete nuevo_candidato["partido"]
    let cedula = nuevo_candidato["cedula"]
    let cedula1 = parseInt(cedula)
    delete nuevo_candidato["cedula"]
    nuevo_candidato["cedula"]= cedula1
    let nombre_partido2 = {nombre:{$eq:nombre_partido}}
    let partido = []
    this.servicioPartido.buscar_id_nombre(nombre_partido2).subscribe(
      query => {
        partido = query
        let unPartido = {}
        unPartido = partido[0]
        nuevo_candidato["id_partido"] = unPartido["_id"]
        delete nuevo_candidato["_id"]
        this.servicioCandidato.crear(nuevo_candidato).subscribe(
          data => {
          Swal.fire(
          'Creado!',
          'El candidato ha sido creado exitosamente',
          'success'
        )
        this.servicioCandidato.listar().subscribe(
          data=> {
            this.source = data;
          }
        )
      }
    ) 
      }
    )
  }

  editConfirm(event){
    let candidato_actualizar = event.newData;
    Swal.fire({
      title: 'Actualizar candidato',
      text: "¿Está seguro que quiere actualizar al candidato "+ candidato_actualizar.nombre + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        let nombre_partido = candidato_actualizar["partido"]
    delete candidato_actualizar["partido"]
    let nombre_partido2 = {nombre:{$eq:nombre_partido}}
    let partido = []
    this.servicioPartido.buscar_id_nombre(nombre_partido2).subscribe(
      query => {
        partido = query
        let unPartido = {}
        unPartido = partido[0]
        let partido_id = unPartido["_id"]
        candidato_actualizar["id_partido"] = partido_id
        let id_candidato = candidato_actualizar["_id"]
        this.servicioCandidato.actualizar(candidato_actualizar,id_candidato).subscribe(
          data => {
          Swal.fire(
          'Actualizado!',
          'El candidato ' + candidato_actualizar["nombre"] + ' ha sido actualizado exitosamente',
          'success'
        )
        event.confirm.resolve();
      }
    ) 
      }
    )
      }
    }
    )
  }


}
