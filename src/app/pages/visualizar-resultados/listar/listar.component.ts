import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../../servicios/candidato.service';
import { ResultadoService } from '../../../servicios/resultado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioResultado: ResultadoService, private servicioCandidato: CandidatoService) { }

  settings = {
    actions: false,
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
}
