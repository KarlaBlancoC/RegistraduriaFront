import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizarPartidosRoutingModule } from './visualizar-partidos-routing.module';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    VisualizarPartidosRoutingModule,
    NbCardModule,
    CommonModule,
    NbIconModule,
    Ng2SmartTableModule,
  ]
})
export class VisualizarPartidosModule { }
