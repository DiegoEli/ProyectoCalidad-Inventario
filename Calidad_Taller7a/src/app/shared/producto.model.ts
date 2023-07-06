export class ProductoModel {
    
    constructor(
        public id_producto: string,
        public nombreProducto: string,
        public marca: string,
        public peso: string,
        public precioCompra: string,
        public precioVenta: string,
        public cantidad: string,
        public categoria_id_categoria: string
    ) {}
    
}