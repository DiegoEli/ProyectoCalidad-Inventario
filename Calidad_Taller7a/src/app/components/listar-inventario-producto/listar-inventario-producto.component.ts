import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-listar-inventario-producto',
  templateUrl: './listar-inventario-producto.component.html',
  styleUrls: ['./listar-inventario-producto.component.css']
})
export class ListarInventarioProductoComponent implements OnInit {

  productos: Observable<ProductoModel[]> | undefined

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.obtenerProductos();
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
