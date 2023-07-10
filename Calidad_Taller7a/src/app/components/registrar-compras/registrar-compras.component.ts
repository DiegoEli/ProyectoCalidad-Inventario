import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { CompraModel } from 'src/app/shared/compra.modelo';
import { CompraService } from 'src/app/shared/compra.service';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-registrar-compras',
  templateUrl: './registrar-compras.component.html',
  styleUrls: ['./registrar-compras.component.css']
})
export class RegistrarComprasComponent implements OnInit {

  id = '';
  compra = new CompraModel('', '', '', '' , '', '');
  categorias: CategoriaModel[] = [];
  productos: ProductoModel[] = [];

  constructor(
    private compraService: CompraService,
    private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('EDITAR');
      this.compraService.obtenerCompra(this.id).subscribe({
        next: (data: CompraModel[]) => {
          this.compra = data[0];
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.log('CREAR');
    }
    this.obtenerCategorias();
    this.obtenerProductos();
  }

  obtenerCategorias() {
    this.categoriaService.obtenerCategorias().subscribe({
      next: (data: CategoriaModel[]) => {
        this.categorias = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  obtenerProductos() {
    const categoriaSeleccionada = this.compra.categoria_id_categoria;
    this.productoService.obtenerProductos().subscribe({
      next: (data: ProductoModel[]) => {
        this.productos = data.filter((producto) => producto.categoria_id_categoria == categoriaSeleccionada);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  //metodos calcularPrecioTotal() y actualizarPrecioVenta()

  onSubmit() {

    if (this.compra.id_compra !== '') {
      this.compraService.actualizarCompra(this.compra).subscribe(
        (data: any) => {
          alert(data);
          console.log(data);
          this.router.navigate(['/compras']);
        },
        (error: any) => {
          console.log('Error al actualizar la compra:', error);
        }
      );
      console.log('se editó ...');
    } else {
      console.log('crear');
      this.compraService.agregarCompra(this.compra).subscribe({
        next: (data: any) => {
          alert(data);
          this.router.navigate(['/compras']);
        },
        error: (error: any) => {
          console.log('Error al agregar la compra:', error);
        }
      });
      console.log('se creó ...');
    }
  }

}
