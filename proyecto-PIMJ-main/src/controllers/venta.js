const Venta = require("../models/venta");

// listado
function listall(req, res) {
  const { page = 1, limit = 10 } = req.query;
  Venta.find({})
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .then((ventas) => {
      if (ventas.length) return res.status(200).send({ ventas });
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err }));
}

// creación
function create(req, res) {
  let venta = new Venta(req.body);
  venta
    .save()
    .then((venta) => res.status(201).send({ venta }))
    .catch((err) => res.status(500).send({ err }));
}

// búsqueda
function show(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.venta) return res.status(404).send({ message: "Not Found" });
  let ventas = req.body.ventas;
  return res.status(200).send({ ventas });
}

// actualizar
function update(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.ventas) return res.status(404).send({ message: "Not Found" });
  let ventas = req.body.ventas[0];
  ventas = Object.assign(ventas, req.body);
  ventas
    .save()
    .then((venta) =>
      res.status(200).send({ message: "venta actualizado", venta })
    )
    .catch((err) => res.status(500).send({ err }));
}

// borrar
function deleted(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.ventas) return res.status(404).send({ message: "Not Found" });
  req.body.ventas[0]
    .remove()
    .then((venta) => {
      res.status(200).send({ message: "venta eliminada", venta });
    })
    .catch((err) => res.status(500).send({ err }));
}

// buscador por query
function find(req, res, next) {
  let query = {};
  query[req.params.key] = req.params.value;
  Venta.find(query)
    .then((ventas) => {
      if (!ventas.length) return next();
      req.body.ventas = ventas;
      return next();
    })
    .catch((err) => {
      req.body.error = err;
      next();
    });
}

module.exports = {
  listall,
  show,
  create,
  update,
  deleted,
  find,
};
