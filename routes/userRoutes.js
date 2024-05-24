// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Rutas para operaciones CRUD de usuarios
// Obtener todos los usuarios
router.get('/users', userController.getAllUsers);
// Obtener un usuario por su ID
router.get('/users/:id', userController.getUserById);
// Crear un nuevo usuario
router.post('/users', userController.createUser);
// Actualizar un usuario existente
router.put('/users/:id', userController.updateUser);
// Eliminar un usuario
router.delete('/users/:id', userController.deleteUser);
module.exports = router;
