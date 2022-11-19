import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuradoOpcionesComponent } from './jurado-opciones/jurado-opciones.component';

const routes: Routes = [
  {
    path: 'opciones',
    component: JuradoOpcionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuradoRoutingModule { }
