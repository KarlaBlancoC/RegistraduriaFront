import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CandidatoService } from '../../../servicios/candidato.service';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioCandidato: CandidatoService, private servicioPartido: PartidoService) { }

  settings = {
    actions: false,
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
    this.servicioCandidato.listar().subscribe(
      data=> {
        this.source = data;
      }
    )
  }

}
