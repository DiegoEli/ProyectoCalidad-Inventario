import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrarProductosComponent } from './components/registrar-productos/registrar-productos.component';
import { ListarInventarioProductoComponent } from './components/listar-inventario-producto/listar-inventario-producto.component';
import { RegistrarCategoriasComponent } from './components/registrar-categorias/registrar-categorias.component';
import { ListarInventarioCategoriasComponent } from './components/listar-inventario-categorias/listar-inventario-categorias.component';
import { ListarInventariosAgotadosComponent } from './components/listar-inventarios-agotados/listar-inventarios-agotados.component';
import { RegistrarVentasComponent } from './components/registrar-ventas/registrar-ventas.component';
import { RegistrarComprasComponent } from './components/registrar-compras/registrar-compras.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from './shared/categoria.service';
import { ProductoService } from './shared/producto.service';
import { VentaService } from './shared/venta.service';
import { CompraService } from './shared/compra.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    RegistrarProductosComponent,
    ListarInventarioProductoComponent,
    RegistrarCategoriasComponent,
    ListarInventarioCategoriasComponent,
    ListarInventariosAgotadosComponent,
    RegistrarVentasComponent,
    RegistrarComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CategoriaService,
    ProductoService,
    VentaService,
    CompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
