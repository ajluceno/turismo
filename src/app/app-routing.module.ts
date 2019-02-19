import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'resumen', loadChildren: './resumen/resumen.module#ResumenPageModule' },
  { path: 'info-vuelos', loadChildren: './info-vuelos/info-vuelos.module#InfoVuelosPageModule' },
  { path: 'info-hoteles', loadChildren: './info-hoteles/info-hoteles.module#InfoHotelesPageModule' },
  { path: 'contacto', loadChildren: './contacto/contacto.module#ContactoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
