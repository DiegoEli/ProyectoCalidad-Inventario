import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VentaModel } from './venta.modelo';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerVentas() {
    return this.http.get<VentaModel[]>(`${this.BASE_URL}/ventas`);
  }

  obtenerVenta(id: string) {
    return this.http.get<VentaModel[]>(`${this.BASE_URL}/ventas/${id}`);
  }

  agregarVenta(venta: VentaModel) {
    return this.http.post<string>(`${this.BASE_URL}/ventas/agregar`, venta);
  }

  actualizarVenta(venta: VentaModel) {
    return this.http.put<string>(`${this.BASE_URL}/ventas/actualizar/${venta.id_venta}`, venta);
  }

  borrarVenta(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/ventas/borrar/${id}`);
  }
  
}
