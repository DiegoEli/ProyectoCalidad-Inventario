const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

//Conexion a la db
const PUERTO = 3000

const conexion = mysql.createConnection(
    {
        host: 'localhost',
        database: 'pruebadb',
        user: 'root',
        password: '123456'
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if (error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('conexion exitosa de la API express)')
})

//Rutas y metodos de la tabla categoria
app.get('/categorias', (req, res) => {
    const query = `SELECT * FROM categoria;`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/categorias/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM categoria WHERE id_categoria=${id};`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.post('/categorias/agregar', (req, res) => {
    const categoria = {
        nombreCategoria: req.body.nombreCategoria
    }

    const query = `INSERT INTO categoria SET ?`
    conexion.query(query, categoria, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se insertó correctamente la categoría`)
    })
})

app.put('/categorias/actualizar/:id', (req, res) => {
    const { id } = req.params
    const { nombreCategoria } = req.body

    const query = `UPDATE categoria SET nombreCategoria='${nombreCategoria}' WHERE id_categoria='${id}';`
    conexion.query(query, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se actualizó correctamente la categoría`)
    })
})

app.delete('/categorias/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM categoria WHERE id_categoria=${id};`
    conexion.query(query, (error) => {
        if (error) console.error(error.message)

        res.json(`Se eliminó correctamente la categoría`)
    })
})

//Rutas y metodos de la tabla producto
app.get('/productos', (req, res) => {
    const query = `SELECT * FROM producto;`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/productos/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM producto WHERE id_producto=${id};`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.post('/productos/agregar', (req, res) => {
    const producto = {
        nombreProducto: req.body.nombreProducto,
        marca: req.body.marca,
        peso: req.body.peso,
        precioCompra: req.body.precioCompra,
        precioVenta: req.body.precioVenta,
        cantidad: req.body.cantidad,
        categoria_id_categoria: req.body.categoria_id_categoria
    }

    const query = `INSERT INTO producto SET ?`
    conexion.query(query, producto, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se insertó correctamente el producto`)
    })
})

app.put('/productos/actualizar/:id', (req, res) => {
    const { id } = req.params
    const { nombreProducto, marca, peso, precioCompra, precioVenta, cantidad, categoria_id_categoria } = req.body

    const query = `UPDATE producto SET nombreProducto='${nombreProducto}', marca='${marca}', peso='${peso}', 
    precioCompra='${precioCompra}', precioVenta='${precioVenta}', cantidad='${cantidad}', categoria_id_categoria='${categoria_id_categoria}' WHERE id_producto='${id}';`
    conexion.query(query, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se actualizó correctamente el producto`)
    })
})

app.delete('/productos/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM producto WHERE id_producto=${id};`
    conexion.query(query, (error) => {
        if (error) console.error(error.message)

        res.json(`Se eliminó correctamente el producto`)
    })
})

// Rutas y métodos de la tabla venta
app.get('/ventas', (req, res) => {
  const query = `SELECT * FROM venta;`
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message)

    if (resultado.length > 0) {
      res.json(resultado)
    } else {
      res.json(`No hay registros de ventas`)
    }
  })
})

app.get('/ventas/:id', (req, res) => {
  const { id } = req.params

  const query = `SELECT * FROM venta WHERE id_venta=${id};`
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message)

    if (resultado.length > 0) {
      res.json(resultado)
    } else {
      res.json(`No hay registros de ventas`)
    }
  })
})

app.post('/ventas/agregar', (req, res) => {
  const venta = {
    cantidad: req.body.cantidad,
    total: req.body.total,
    categoria_id_categoria: req.body.categoria_id_categoria,
    producto_id_producto: req.body.producto_id_producto
  }

  const query = `INSERT INTO venta SET ?`
  conexion.query(query, venta, (error) => {
    if (error) return console.error(error.message)

    res.json(`Se insertó correctamente la venta`)
  })
})

app.put('/ventas/actualizar/:id', (req, res) => {
  const { id } = req.params
  const { cantidad, total, categoria_id_categoria, producto_id_producto } = req.body

  const query = `UPDATE venta SET cantidad='${cantidad}', total='${total}', categoria_id_categoria='${categoria_id_categoria}', producto_id_producto='${producto_id_producto}' WHERE id_venta='${id}';`
  conexion.query(query, (error) => {
    if (error) return console.error(error.message)

    res.json(`Se actualizó correctamente la venta`)
  })
})

app.delete('/ventas/borrar/:id', (req, res) => {
  const { id } = req.params

  const query = `DELETE FROM venta WHERE id_venta=${id};`
  conexion.query(query, (error) => {
    if (error) console.error(error.message)

    res.json(`Se eliminó correctamente la venta`)
  })
})

// Rutas y métodos de la tabla compra
app.get('/compras', (req, res) => {
  const query = `SELECT * FROM compra;`
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message)

    if (resultado.length > 0) {
      res.json(resultado)
    } else {
      res.json(`No hay registros de compras`)
    }
  })
})

app.get('/compras/:id', (req, res) => {
  const { id } = req.params

  const query = `SELECT * FROM compra WHERE id_compra=${id};`
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message)

    if (resultado.length > 0) {
      res.json(resultado)
    } else {
      res.json(`No hay registros de compras`)
    }
  })
})

app.post('/compras/agregar', (req, res) => {
  const compra = {
    proveedor: req.body.proveedor,
    cantidad: req.body.cantidad,
    total: req.body.total,
    categoria_id_categoria: req.body.categoria_id_categoria,
    producto_id_producto: req.body.producto_id_producto
  }

  const query = `INSERT INTO compra SET ?`
  conexion.query(query, compra, (error) => {
    if (error) return console.error(error.message)

    res.json(`Se insertó correctamente la compra`)
  })
})

app.put('/compras/actualizar/:id', (req, res) => {
  const { id } = req.params
  const { proveedor, cantidad, total, categoria_id_categoria, producto_id_producto } = req.body

  const query = `UPDATE compra SET proveedor='${proveedor}', cantidad='${cantidad}', total='${total}', categoria_id_categoria='${categoria_id_categoria}', producto_id_producto='${producto_id_producto}' WHERE id_compra='${id}';`
  conexion.query(query, (error) => {
    if (error) return console.error(error.message)

    res.json(`Se actualizó correctamente la compra`)
  })
})

app.delete('/compras/borrar/:id', (req, res) => {
  const { id } = req.params

  const query = `DELETE FROM compra WHERE id_compra=${id};`
  conexion.query(query, (error) => {
    if (error) console.error(error.message)

    res.json(`Se eliminó correctamente la compra`)
  })
})

