const Producto = require('../models/producto');

// listado de todos los datos
function listall(req, res) {
    // paginación y limit datos de 10 en 10
    const { page = 1, limit = 10 } = req.query;
    Producto.find({}).limit(limit * 1).skip((page - 1) * limit)
        .then(productos => {
            if (productos.length) return res.status(200).send({ productos })
            return res.status(204).send({ message: 'NO CONTENT' });
        }).catch(err => res.status(500).send({ err }))
}

// creación de datos
function create(req, res) {
    let producto = new producto(req.body);
    producto.save()
        .then(producto =>
            res.status(201).send({ producto })
        ).catch(err => res.status(500).send({ err }))
}

// validador de búsqueda
function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.producto) return res.status(404).send({ message: 'Not Found' });
    let productos = req.body.productos;
    return res.status(200).send({ productos });
}

// actualizar datos
function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.productos) return res.status(404).send({ message: 'Not Found' });
    let productos = req.body.productos[0];
    productos = Object.assign(productos, req.body);
    productos.save()
        .then(producto => res.status(200).send({ message: 'producto actualizado', producto })
        ).catch(err => res.status(500).send({ err }))
}

// borrar datos
function deleted(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.productos) return res.status(404).send({ message: 'Not Found' });
    req.body.productos[0].remove()
        .then(producto => {
            res.status(200).send({ message: 'producto eliminado', producto })
        }
        ).catch(err => res.status(500).send({ err }));
}

// buscador de datos por query
function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Producto.find(query).then(productos => {
        if(!productos.length) return next();
        req.body.productos = productos;
        return next();
    }).catch(err =>{
        req.body.error = err;
        next();
    })
}

module.exports = {
    listall,
    show,
    create,
    update,
    deleted,
    find,
}