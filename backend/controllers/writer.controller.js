const db = require("../models");
const Writer = db.writers;
const Op = db.Sequelize.Op;

// Create and Save a new Writer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "El Contenido no puede estar vacío!"
      });
      return;
    }
  
    // Create a Writer
    const writer = {
      nombre: req.body.nombre,
      fechas: req.body.fechas,
      pais: req.body.pais,
    };
  
    // Save Writer in the database
    Writer.create(writer)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error ocurrido al crear un Escritor."
        });
      });
  };

// Retrieve all Writers from the database.
exports.findAll = (req, res) => {
      
    Writer.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los escritores."
        });
      });
  };

// Retrieve Writers  find by name
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Writer.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar los Escritores"
      });
    });
};

// Find a single Escritor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Writer.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se encuentra el Escritor con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar Escritor con id=" + id
        });
      });
  };

// Update a Writer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Writer.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Escritor con id=${id} actualizado correctamente.`
          });
        } else {
          res.send({
            message: `No se puede actualizar Escritor con id=${id}. Tal vez no se encontró Escritor o req.body está vacío!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error actualizando Escritor con id=" + id
        });
      });
  };

// Delete a Writer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Writer.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Escritor con id=${id} borrado correctamente`
          });
        } else {
          res.send({
            message: `No se puede borrar Escritor con id=${id}. Tal vez Escritor no fue encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo borrar Escritor con id=" + id
        });
      });
  };

// Delete all Writers from the database.
exports.deleteAll = (req, res) => {
    Writer.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Todos los Escritores fueron borrados correctamentes` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al borrar todos los escritores"
        });
      });
  };
