import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../../servicios/resultado.service';
import Swal from 'sweetalert2';
import { CandidatoService } from '../../../servicios/candidato.service';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioResultado: ResultadoService, private servicioCandidato: CandidatoService,
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
      cedula_candidato:{
        title: 'Cedula candidato',
        type: 'integer'
      },
      nombre_candidato: {
        title: 'Nombre candidato',
        type: 'string',
        editable: false,
        addable: false,
      },
      apellido_candidato: {
        title: 'Apellido candidato',
        type: 'string',
        editable: false,
        addable: false,
      },
      nombre_partido: {
        title: 'Partido',
        type: 'String',
        editable: false,
        addable: false,
      },
      id_mesa: {
        title: 'Mesa',
        type: 'String',
      },
      votos: {
        title: 'Votos',
        type: 'number',
      }
      
    }
  }
  source = []

  ngOnInit(): void {
    this.servicioResultado.listar().subscribe(
      data=> {
        this.source = data;
      }
    )
  }

  deleteConfirm(event){
    let resultado_a_eliminar = event.data;
    Swal.fire({
      title: 'Eliminar resultado',
      text: "¿Está seguro que quiere eliminar el resultado"+ resultado_a_eliminar.nombre + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.servicioResultado.eliminar(resultado_a_eliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado',
              'El resultado ha sido eliminado correctamente',
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
    let nuevo_resultado = event.newData;
    let laCedula = nuevo_resultado["cedula_candidato"]
    delete nuevo_resultado["_id"]
    delete nuevo_resultado["nombre_candidato"]
    delete nuevo_resultado["apellido_candidato"]
    delete nuevo_resultado["nombre_partido"]
    delete nuevo_resultado["cedula_candidato"]
    let cedula1 = parseInt(laCedula)
    let laCedulaCandidato = {cedula:{$eq:cedula1}}
    let candidato = []
    this.servicioCandidato.buscar_id_cedula(laCedulaCandidato).subscribe(
      query =>{
        candidato = query
        console.log(candidato)
        let elCandidato = {}
        elCandidato = candidato[0],
        console.log(elCandidato)
        nuevo_resultado["id_candidato"] = elCandidato["_id"]
        this.servicioResultado.crear(nuevo_resultado).subscribe(
          data => {
            Swal.fire(
              'Creado',
              'El resultado ha sido creado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    )
  }

  editConfirm(event){
    let resultado_actualizar = event.newData;
    Swal.fire({
      title: 'Actualizar resultado',
      text: "¿Está seguro que quiere actualizar el resultado con el id "+ resultado_actualizar._id + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#68BE00',
      cancelButtonColor: '#FF593C',
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      delete resultado_actualizar["nombre_candidato"]
      delete resultado_actualizar["apellido_candidato"]
      delete resultado_actualizar["nombre_partido"]
      let laCedula = resultado_actualizar["cedula_candidato"]
      let cedula1 = parseInt(laCedula)
      let laCedulaCandidato = {cedula:{$eq:cedula1}}
      let candidato = []
      this.servicioCandidato.buscar_id_cedula(laCedulaCandidato).subscribe(
        query =>{
          candidato = query
          console.log(candidato)
          let elCandidato = {}
          elCandidato = candidato[0],
          console.log(elCandidato)
          resultado_actualizar["id_candidato"] = elCandidato["_id"]
          let id_resultado = resultado_actualizar["_id"]
          this.servicioResultado.actualizar(resultado_actualizar,id_resultado).subscribe(
            data => {
              Swal.fire(
                'Actualizado',
                'El resultado ha sido actualizado correctamente',
                'success'
              )
              event.confirm.resolve();
            }
          )

        }

      )
    }
    )
  }
}
