import { Component, OnInit } from '@angular/core';
import { RESTProductosResponse } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  productos:RESTProductosResponse[] = [];

  constructor(private productosService: ProductosService ) { }

  ngOnInit(): void {
    this.productosService.getProductos()
    .subscribe(resp => {
      this.productos = resp;
    });
  }

}
