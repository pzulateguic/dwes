const Cliente = require('../models/cliente');

// listado de todos los datos
function listall(req, res) {
    // paginación y limit datos de 10 en 10
    const { page = 1, limit = 10 } = req.query;
    Cliente.find({}).limit(limit * 1).skip((page - 1) * limit)
        .then(clientes => {
            if (clientes.length) return res.status(200).send({ clientes })
            return res.status(204).send({ message: 'NO CONTENT' });
        }).catch(err => res.status(500).send({ err }))
}

// creación de datos
function create(req, res) {
    let cliente = new Cliente(req.body);
    cliente.save()
        .then(cliente =>
            res.status(201).send({ cliente })
        ).catch(err => res.status(500).send({ err }))
}

// validador de búsqueda
function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.clientes) return res.status(404).send({ message: 'Not Found' });
    let clientes = req.body.clientes;
    return res.status(200).send({ clientes });
}

// actualizar datos
function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.clientes) return res.status(404).send({ message: 'Not Found' });
    let clientes = req.body.clientes[0];
    clientes = Object.assign(clientes, req.body);
    clientes.save()
        .then(cliente => res.status(200).send({ message: 'cliente actualizado', cliente })
        ).catch(err => res.status(500).send({ err }))
}

// borrar datos
function deleted(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.clientes) return res.status(404).send({ message: 'Not Found' });
    req.body.clientes[0].remove()
        .then(cliente => {
            res.status(200).send({ message: 'cliente eliminado', cliente })
        }
        ).catch(err => res.status(500).send({ err }));
}

// buscador de datos por query
function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Cliente.find(query).then(clientes => {
        if(!clientes.length) return next();
        req.body.clientes = clientes;
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