import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesaRoutingModule } from './mesa-routing.module';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    MesaRoutingModule,
    NbCardModule,
    CommonModule,
    NbIconModule,
    Ng2SmartTableModule,
  ]
})
export class MesaModule { }
