// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
// Rutas para operaciones CRUD de usuarios
// Obtener todos los usuarios
router.get('/cliente', clienteController.getAllClientes);
// Obtener un usuario por su ID
router.get('/cliente/:id', clienteController.getClienteById);
// Crear un nuevo usuario
router.post('/cliente', clienteController.createCliente);
// Actualizar un usuario existente
router.put('/cliente/:id', clienteController.updateCliente);
// Eliminar un usuario
router.delete('/cliente/:id', clienteController.deleteCliente);
//consultar fecha de nacimiento 
router.get('/cliente/:id/nacimiento', clienteController.getClienteNacimiento);

module.exports = router;