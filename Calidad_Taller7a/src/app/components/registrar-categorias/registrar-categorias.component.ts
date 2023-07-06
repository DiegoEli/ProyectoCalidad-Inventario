import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';

@Component({
  selector: 'app-registrar-categorias',
  templateUrl: './registrar-categorias.component.html',
  styleUrls: ['./registrar-categorias.component.css']
})
export class RegistrarCategoriasComponent implements OnInit {

  id = '';
  categoria = new CategoriaModel('', '');

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('EDITAR');
      this.categoriaService.obtenerCategoria(this.id).subscribe({
        next: (data: CategoriaModel[]) => {
          this.categoria = data[0];
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.log('CREAR');
    }
  }

  onSubmit() {

    if (this.categoria.id_categoria !== '') {
      this.categoriaService.actualizarCategoria(this.categoria).subscribe(
        (data: any) => {
          alert(data);
          console.log(data);
          this.router.navigate(['/categorias']);
        },
        (error: any) => {
          console.log('Error al actualizar la categoría:', error);
        }
      );
      console.log('se editó ...');
    } else {
      console.log('crear');
      this.categoriaService.agregarCategoria(this.categoria).subscribe({
        next: (data: any) => {
          alert(data);
          this.router.navigate(['/categorias']);
        },
        error: (error: any) => {
          console.log('Error al agregar la categoría:', error);
        }
      });
      console.log('se creó ...');
    }
  }
}
