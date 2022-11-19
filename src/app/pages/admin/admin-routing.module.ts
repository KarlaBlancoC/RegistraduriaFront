import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmopcionesComponent } from './admopciones/admopciones.component';

const routes: Routes = [
  {
    path: 'opciones',
    component: AdmopcionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
