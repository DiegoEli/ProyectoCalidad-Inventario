import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';

@Component({
  selector: 'app-listar-inventario-categorias',
  templateUrl: './listar-inventario-categorias.component.html',
  styleUrls: ['./listar-inventario-categorias.component.css']
})
export class ListarInventarioCategoriasComponent implements OnInit {

  categorias: Observable<CategoriaModel[]> | undefined

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categorias = this.categoriaService.obtenerCategorias();
  }

  borrarCategoria(id: string) {
    if (confirm('¿Estás seguro de eliminar?')) {
      this.categoriaService.borrarCategoria(id).subscribe(data => {
        console.log(data);
        this.categorias = this.categoriaService.obtenerCategorias();
      });
    }
  }

}
