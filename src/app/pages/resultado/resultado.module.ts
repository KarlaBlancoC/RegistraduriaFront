import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    NbCardModule,
    CommonModule,
    NbIconModule,
    Ng2SmartTableModule,
  ]
})
export class ResultadoModule { }
