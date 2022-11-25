import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CandidatoService } from '../../../servicios/candidato.service';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioCandidato: CandidatoService) { }

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
      id_partido:{
          title: 'Partido',
          type: 'string',
      }
    }
  }
  source = []

  ngOnInit(): void {
    this.servicioCandidato.listar().subscribe(
      data=> {
        this.source = data;
      }
    )
  }

  onDeleteConfirm(event){}

}
