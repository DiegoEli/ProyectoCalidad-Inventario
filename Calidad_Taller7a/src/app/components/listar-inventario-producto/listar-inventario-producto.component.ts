import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-listar-inventario-producto',
  templateUrl: './listar-inventario-producto.component.html',
  styleUrls: ['./listar-inventario-producto.component.css']
})
export class ListarInventarioProductoComponent implements OnInit {

  productos: Observable<ProductoModel[]> | undefined
  categorias: CategoriaModel[] = [];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.productos = this.productoService.obtenerProductos();

    this.categoriaService.obtenerCategorias().subscribe(
      (categorias: CategoriaModel[]) => {
        this.categorias = categorias;
      }
    );

  }

  obtenerNombreCategoria(id_Categoria: string): string {
    const categoria = this.categorias.find(cat => cat.id_categoria === id_Categoria);
    return categoria ? categoria.nombreCategoria : 'Categoría no encontrada';
  }

  borrarProducto(id: string) {
    if (confirm('¿Estás seguro de eliminar?')) {
      this.productoService.borrarProducto(id).subscribe(data => {
        console.log(data);
        this.productos = this.productoService.obtenerProductos();
      });
    }
  }

}
