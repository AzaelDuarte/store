import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RESTProductosResponse } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }


  getProductos(){
    return this.http.get<RESTProductosResponse[]>(`${this.url}/productos`)
  }
}

