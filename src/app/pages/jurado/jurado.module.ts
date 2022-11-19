import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuradoRoutingModule } from './jurado-routing.module';
import { JuradoOpcionesComponent } from './jurado-opciones/jurado-opciones.component';
import { FormsModule } from '@angular/forms';
import { SeguridadRoutingModule } from '../seguridad/seguridad-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';


@NgModule({
  declarations: [
    JuradoOpcionesComponent
  ],
  imports: [
    CommonModule,
    JuradoRoutingModule,
    CommonModule,
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
    NbIconModule,
    NbAlertModule
  ]
})
export class JuradoModule { }
