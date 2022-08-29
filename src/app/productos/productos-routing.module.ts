import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: ':id',
        component: ProductoComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: '**',
        redirectTo: 'listar'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
