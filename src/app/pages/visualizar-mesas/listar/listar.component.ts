import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MesaService } from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicioMesa: MesaService) { }

  settings = {
    actions: false,
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

  editConfirm(event){}

}
