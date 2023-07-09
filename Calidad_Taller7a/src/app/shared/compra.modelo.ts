export class CompraModel {

  constructor(
    public id_compra: string,
    public proveedor: string,
    public cantidad: string,
    public total: string,
    public categoria_id_categoria: string,
    public producto_id_producto: string
  ) { }

}
