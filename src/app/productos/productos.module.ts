import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ProductoComponent,
    ListarComponent,
    TarjetaProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
