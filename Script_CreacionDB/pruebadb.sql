-- Crear la base de datos
DROP DATABASE IF EXISTS pruebadb;

CREATE DATABASE IF NOT EXISTS pruebadb;
USE pruebadb;

-- -----------------------------------------------------
-- Table categoria
-- -----------------------------------------------------
DROP TABLE IF EXISTS categoria;
CREATE TABLE IF NOT EXISTS categoria (
  id_categoria INT NOT NULL AUTO_INCREMENT,
  nombreCategoria VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_categoria)
);
  
-- -----------------------------------------------------
-- Table producto
-- -----------------------------------------------------
DROP TABLE IF EXISTS producto;
CREATE TABLE IF NOT EXISTS producto (
  id_producto INT NOT NULL AUTO_INCREMENT,
  nombreProducto VARCHAR(45) NOT NULL,
  marca VARCHAR(45) NOT NULL,
  peso DECIMAL(7,2) NOT NULL,
  precioCompra DECIMAL(7,2) NOT NULL,
  precioVenta DECIMAL(7,2) NOT NULL,
  cantidad INT NOT NULL,
  categoria_id_categoria INT NOT NULL,
  PRIMARY KEY (id_producto),
  CONSTRAINT fk_producto_categoria FOREIGN KEY (categoria_id_categoria) REFERENCES categoria (id_categoria)
);
  
-- -----------------------------------------------------
-- Table venta
-- -----------------------------------------------------
DROP TABLE IF EXISTS venta;
CREATE TABLE IF NOT EXISTS venta (
  id_venta INT NOT NULL AUTO_INCREMENT,
  cantidad INT NOT NULL,
  total DECIMAL(7,2) NOT NULL,
  categoria_id_categoria INT NOT NULL,
  producto_id_producto INT NOT NULL,
  PRIMARY KEY (id_venta),
  CONSTRAINT fk_venta_categoria1 FOREIGN KEY (categoria_id_categoria) REFERENCES categoria (id_categoria),
  CONSTRAINT fk_venta_producto1 FOREIGN KEY (producto_id_producto) REFERENCES producto (id_producto)
);

-- -----------------------------------------------------
-- Table compra
-- -----------------------------------------------------
DROP TABLE IF EXISTS compra;
CREATE TABLE IF NOT EXISTS compra (
  id_compra INT NOT NULL AUTO_INCREMENT,
  proveedor VARCHAR(45) NOT NULL,
  cantidad INT NOT NULL,
  total DECIMAL(7,2) NOT NULL,
  categoria_id_categoria INT NOT NULL,
  producto_id_producto INT NOT NULL,
  PRIMARY KEY (id_compra),
  CONSTRAINT fk_compra_categoria1 FOREIGN KEY (categoria_id_categoria) REFERENCES categoria (id_categoria),
  CONSTRAINT fk_compra_producto1 FOREIGN KEY (producto_id_producto) REFERENCES producto (id_producto)
);

-- -----------------------------------------------------
-- OPERACIONES DE CONSULTA O MODIFICACION
-- -----------------------------------------------------
INSERT INTO categoria (nombreCategoria)
	VALUES 
		('Frutas'), 
		('Verduras'),
        ('Enlatados');

INSERT INTO producto (nombreProducto, marca, peso, precioCompra, precioVenta, cantidad, categoria_id_categoria)
	VALUES
		('Atun', 'El cocinero', 172, 1.20, 1.50, 45, 3),
		('Sardina', 'La Favorita', 300, 1.40, 2.50, 5, 3),
		('Manzana', 'Frutitas S.A', 50, 0.15, 0.50, 50, 1),
        ('Zanahoria', 'Verduritas S.A', 50, 0.25, 0.50, 20, 2);

INSERT INTO venta (cantidad, total, categoria_id_categoria, producto_id_producto)
	VALUES
		(2, 5.00, 3, 1),
        (5, 2.00, 1, 3);

INSERT INTO compra (proveedor, cantidad, total, categoria_id_categoria, producto_id_producto)
	VALUES
		('Pepito S.A', 20, 5.00, 2, 4);

-- UPDATE productos SET marca = 'LG' 
-- 	WHERE id_producto = 1;

-- DELETE FROM productos 
-- 	WHERE id_producto = 3;

-- INSERT INTO productos VALUES ('Electrodomésticos', 'Lavadora', 'Samsung', 65.2, 700, 1000, 5)
