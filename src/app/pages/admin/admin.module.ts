import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmopcionesComponent } from './admopciones/admopciones.component';
import { FormsModule } from '@angular/forms';
import { SeguridadRoutingModule } from '../seguridad/seguridad-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';


@NgModule({
  declarations: [
    AdmopcionesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CommonModule,
    SeguridadRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule
  ]
})
export class AdminModule { }
