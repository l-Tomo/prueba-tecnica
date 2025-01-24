const express = require('express');
const response = require('./../../red/responses/responses');
const controller = require('./controller');

const router = express.Router();

// Rutas existentes
router.get('/', all);
router.get('/:id', one);
router.post('/', add);
router.put('/', update); // Cambié "remove" por "update" para actualizar
router.delete('/', remove); // Agregamos correctamente la ruta DELETE

async function all(req, res) {
    const items = await controller.all()
        .then((items) => {
            response.success(req, res, items, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
}

async function one(req, res) {
    const items = await controller.one(req.params.id)
        .then((items) => {
            response.success(req, res, items, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
}

async function remove(req, res) {
    const { id } = req.body; // El ID viene en el cuerpo de la solicitud

    if (!id) {
        return response.error(req, res, 'ID es necesario para eliminar el item', 400);
    }

    const result = await controller.remove(id)
        .then(() => {
            response.success(req, res, 'Item Borrado', 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
}

async function add(req, res, next) {
    try {
        const { id, nombre, descripcion, id_categoria } = req.body;

        if (!nombre || !descripcion || !id_categoria) {
            return response.error(req, res, "Todos los campos son obligatorios", 400);
        }

        const result = await controller.add(req.body);
        const message = !id || id == 0
            ? "Item guardado con éxito"
            : "Item actualizado con éxito";

        response.success(req, res, message, 201);
    } catch (err) {
        next(err);
    }
}

async function update(req, res) {
    const { id, nombre, descripcion, id_categoria } = req.body;

    if (!id || !nombre || !descripcion || !id_categoria) {
        return response.error(req, res, "Todos los campos son obligatorios para actualizar", 400);
    }

    const result = await controller.add(req.body); // Reutilizamos 'add' para actualizar
    response.success(req, res, "Item actualizado con éxito", 200);
}

module.exports = router;
