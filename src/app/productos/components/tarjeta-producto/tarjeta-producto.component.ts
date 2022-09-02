import { Component, Input, OnInit } from '@angular/core';
import { RESTProductosResponse } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto!:RESTProductosResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
