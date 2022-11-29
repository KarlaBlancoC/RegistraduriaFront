import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioPartido: PartidoService) { }

  settings = {
    actions: false,
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
    this.servicioPartido.listar().subscribe(
      data=> {
        this.source = data;
      }
    )
  }
}
