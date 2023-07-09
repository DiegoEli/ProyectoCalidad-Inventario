import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompraModel } from './compra.modelo';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerCompras() {
    return this.http.get<CompraModel[]>(`${this.BASE_URL}/compras`);
  }

  obtenerCompra(id: string) {
    return this.http.get<CompraModel[]>(`${this.BASE_URL}/compras/${id}`);
  }

  agregarCompra(compra: CompraModel) {
    return this.http.post<string>(`${this.BASE_URL}/compras/agregar`, compra);
  }

  actualizarCompra(compra: CompraModel) {
    return this.http.put<string>(`${this.BASE_URL}/compras/actualizar/${compra.id_compra}`, compra);
  }

  borrarCompra(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/compras/borrar/${id}`);
  }
  
}
