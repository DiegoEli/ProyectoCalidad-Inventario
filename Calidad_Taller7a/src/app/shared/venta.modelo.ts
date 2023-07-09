export class VentaModel {

  constructor(
    public id_venta: string,
    public cantidad: string,
    public total: string,
    public categoria_id_categoria: string,
    public producto_id_producto: string
  ) { }

}
