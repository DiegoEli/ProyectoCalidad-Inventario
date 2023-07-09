import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-listar-inventarios-agotados',
  templateUrl: './listar-inventarios-agotados.component.html',
  styleUrls: ['./listar-inventarios-agotados.component.css']
})
export class ListarInventariosAgotadosComponent implements OnInit{

  productos: Observable<ProductoModel[]> | undefined

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productos = this.productoService.obtenerProductos();
  }

  siStockInsufficient(stock: string): boolean {
    const stockNumber = parseInt(stock, 10);
    return stockNumber < 10;
  }
}
