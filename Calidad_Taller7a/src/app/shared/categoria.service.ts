import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerCategorias() {
    return this.http.get<CategoriaModel[]>(this.BASE_URL+'/categorias');
  }

  obtenerCategoria(id: string) {
    return this.http.get<CategoriaModel[]>(`${this.BASE_URL}/categorias/${id}`);
  }

  agregarCategoria(categoria: CategoriaModel) {
    return this.http.post<string>(`${this.BASE_URL}/categorias/agregar`, categoria);
  }

  actualizarCategoria(categoria: CategoriaModel) {
    return this.http.put<string>(`${this.BASE_URL}/categorias/actualizar/${categoria.id_categoria}`, categoria)
  }

  borrarCategoria(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/categorias/borrar/${id}`)
  }

}
