import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizarCandidatosRoutingModule } from './visualizar-candidatos-routing.module';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    VisualizarCandidatosRoutingModule,
    NbCardModule,
    CommonModule,
    NbIconModule,
    Ng2SmartTableModule,
  ]
})
export class VisualizarCandidatosModule { }
