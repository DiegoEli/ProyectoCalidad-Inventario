import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarCategoriasComponent } from './components/registrar-categorias/registrar-categorias.component';
import { ListarInventarioCategoriasComponent } from './components/listar-inventario-categorias/listar-inventario-categorias.component';
import { RegistrarProductosComponent } from './components/registrar-productos/registrar-productos.component';
import { ListarInventarioProductoComponent } from './components/listar-inventario-producto/listar-inventario-producto.component';
import { ListarInventariosAgotadosComponent } from './components/listar-inventarios-agotados/listar-inventarios-agotados.component';
import { RegistrarVentasComponent } from './components/registrar-ventas/registrar-ventas.component';
import { RegistrarComprasComponent } from './components/registrar-compras/registrar-compras.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'categorias', component: ListarInventarioCategoriasComponent },
  { path: 'categorias/agregar', component: RegistrarCategoriasComponent },
  { path: 'categorias/editar/:id', component: RegistrarCategoriasComponent },
  { path: 'productos', component: ListarInventarioProductoComponent },
  { path: 'productos/agregar', component: RegistrarProductosComponent },
  { path: 'productos/editar/:id', component: RegistrarProductosComponent },
  { path: 'listar-inventarios-agotados', component: ListarInventariosAgotadosComponent },
  { path: 'ventas/agregar', component: RegistrarVentasComponent },
  { path: 'compras/agregar', component: RegistrarComprasComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
