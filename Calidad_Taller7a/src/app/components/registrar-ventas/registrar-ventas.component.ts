import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';
import { VentaModel } from 'src/app/shared/venta.modelo';
import { VentaService } from 'src/app/shared/venta.service';

@Component({
  selector: 'app-registrar-ventas',
  templateUrl: './registrar-ventas.component.html',
  styleUrls: ['./registrar-ventas.component.css']
})
export class RegistrarVentasComponent implements OnInit {
  
  id = '';
  venta = new VentaModel('', '', '', '' , '');
  categorias: CategoriaModel[] = [];
  productos: ProductoModel[] = [];

  constructor(
    private ventaService: VentaService,
    private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('EDITAR');
      this.ventaService.obtenerVenta(this.id).subscribe({
        next: (data: VentaModel[]) => {
          this.venta = data[0];
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
    // this.venta.cantidad = '', Validators.min(1);
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
    const categoriaSeleccionada = this.venta.categoria_id_categoria;
    this.productoService.obtenerProductos().subscribe({
      next: (data: ProductoModel[]) => {
        this.productos = data.filter((producto) => producto.categoria_id_categoria == categoriaSeleccionada);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  actualizarPrecioVenta() {
    const nombreProducto = this.venta.producto_id_producto;
    const productoSeleccionado = this.productos.find(producto => producto.id_producto === nombreProducto);

    if (productoSeleccionado) {
      this.venta.producto_id_producto = productoSeleccionado.nombreProducto;
      this.venta.producto_id_producto = productoSeleccionado.precioVenta.toString();
    } else {
      this.venta.producto_id_producto = '';
      this.venta.producto_id_producto = '';
    }
    this.venta.total = '';
  }

  calcularPrecioTotal() {
    const cantidad = this.venta.cantidad;
    const productoSeleccionado = this.productos.find(producto => producto.id_producto === this.venta.producto_id_producto);
  
    if (cantidad && productoSeleccionado) {
      const precioTotal = parseInt(cantidad) * parseInt(productoSeleccionado.precioVenta);
      this.venta.total = precioTotal.toFixed(2);
    } else {
      this.venta.total = '';
    }
  }

  onSubmit() {

    if (this.venta.id_venta !== '') {
      this.ventaService.actualizarVenta(this.venta).subscribe(
        (data: any) => {
          alert(data);
          console.log(data);
          this.router.navigate(['/ventas']);
        },
        (error: any) => {
          console.log('Error al actualizar la venta:', error);
        }
      );
      console.log('se editó ...');
    } else {
      console.log('crear');
      this.ventaService.agregarVenta(this.venta).subscribe({
        next: (data: any) => {
          alert(data);
          this.router.navigate(['/ventas']);
        },
        error: (error: any) => {
          console.log('Error al agregar la venta:', error);
        }
      });
      console.log('se creó ...');
    }
  }

}
