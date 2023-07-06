import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.css']
})
export class RegistrarProductosComponent implements OnInit {

  id = '';
  producto = new ProductoModel('', '', '', '', '', '', '', '');
  categorias: CategoriaModel[] = [];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('EDITAR');
      this.productoService.obtenerProducto(this.id).subscribe({
        next: (data: ProductoModel[]) => {
          this.producto = data[0];
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.log('CREAR');
    }
    this.obtenerCategorias();
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

  onSubmit() {
    
    if (this.producto.id_producto !== '') {
      this.productoService.actualizarProducto(this.producto).subscribe(
        (data: any) => {
          alert(data);
          console.log(data);
          this.router.navigate(['/productos']);
        },
        (error: any) => {
          console.log('Error al actualizar el producto:', error);
        }
      );
      console.log('se editó ...');
    } else {
      console.log('crear');
      this.productoService.agregarProducto(this.producto).subscribe({
        next: (data: any) => {
          alert(data);
          this.router.navigate(['/productos']);
        },
        error: (error: any) => {
          console.log('Error al agregar el producto:', error);
        }
      });
      console.log('se creó ...');
    }
  }
  
  // id = '';
  // producto = new ProductoModel('', '', '', '', '', '', '', '');

  // constructor(
  //   private productoService: ProductoService,
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) { }

  // ngOnInit() {
  //   this.id = this.route.snapshot.params['id'];
  //   if (this.id) {
  //     console.log('EDITAR');
  //     this.productoService.obtenerProducto(this.id).subscribe({
  //       next: (data: ProductoModel[]) => {
  //         this.producto = data[0];
  //       },
  //       error: (error: any) => {
  //         console.log(error);
  //       }
  //     });
  //   } else {
  //     console.log('CREAR');
  //   }
  // }

  // onSubmit() {
    
  
  //   if (this.producto.id_producto !== '') {
  //     this.productoService.actualizarProducto(this.producto).subscribe(
  //       (data: any) => {
  //         alert(data);
  //         console.log(data);
  //         this.router.navigate(['/productos']);
  //       },
  //       (error: any) => {
  //         console.log('Error al actualizar el producto:', error);
  //       }
  //     );
  //     console.log('se edito ...');
  //   } else {
  //     console.log('crear');
  //     this.productoService.agregarProducto(this.producto).subscribe({
  //       next: (data: any) => {
  //         alert(data);
  //         this.router.navigate(['/productos']);
  //       },
  //       error: (error: any) => {
  //         console.log('Error al agregar el producto:', error);
  //       }
  //     });
  //     console.log('se creo ...');
  //   }
  // }
  
  //-----------------------------ejemplo general-------------------------------------
  // onSubmit() {
  //   console.log('onSubmit');

  //   if (this.producto.id_producto !== '') {
  //     this.productoService.actualizarProducto(this.producto).subscribe({
  //       next: (data: any) => {
  //         alert(data);
  //         this.router.navigate(['/productos']);
  //         console.log(data);
  //       }
        
  //     });
  //   } else {
  //     console.log('crear');
  //     this.productoService.agregarProducto(this.producto).subscribe({
  //       next: (data: any) => {
  //         alert(data);
  //         this.router.navigate(['/productos']);
  //       }
  //     });
  //   }
  // }
}
