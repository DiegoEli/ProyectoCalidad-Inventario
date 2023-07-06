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

import { ProductoService } from './shared/producto.service';
import { CategoriaService } from './shared/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    RegistrarProductosComponent,
    ListarInventarioProductoComponent,
    RegistrarCategoriasComponent,
    ListarInventarioCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductoService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
