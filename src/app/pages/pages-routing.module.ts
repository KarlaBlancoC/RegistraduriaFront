import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'visualizar-candidatos',
      loadChildren: () => import('./visualizar-candidatos/visualizar-candidatos.module')
        .then(m=> m.VisualizarCandidatosModule),
    },
    {
      path: 'visualizar-partidos',
      loadChildren: () => import('./visualizar-partidos/visualizar-partidos.module')
        .then(m=> m.VisualizarPartidosModule),
    },
    {
      path: 'visualizar-mesas',
      loadChildren: () => import('./visualizar-mesas/visualizar-mesas.module')
        .then(m=> m.VisualizarMesasModule),
    },
    {
      path: 'visualizar-resultados',
      loadChildren: () => import('./visualizar-resultados/visualizar-resultados.module')
        .then(m=> m.VisualizarResultadosModule),
    },
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridad/seguridad.module')
        .then(m=> m.SeguridadModule),
    },
    {
      path: 'candidato',
      loadChildren: () => import('./candidato/candidato.module')
        .then(m=> m.CandidatoModule),
    },
    {
      path: 'partido',
      loadChildren: () => import('./partido/partido.module')
        .then(m=> m.PartidoModule),
    },
    {
      path: 'usuario',
      loadChildren: () => import('./usuario/usuario.module')
        .then(m=> m.UsuarioModule),
    },
    {
      path: 'mesa',
      loadChildren: () => import('./mesa/mesa.module')
        .then(m=> m.MesaModule),
    },
    {
      path: 'resultado',
      loadChildren: () => import('./resultado/resultado.module')
        .then(m=> m.ResultadoModule),
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
