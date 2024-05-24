// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
// Rutas para operaciones CRUD de usuarios
// Obtener todos los usuarios
router.get('/productos', productoController.getAllProductos);
// Obtener un usuario por su ID
router.get('/productos/:id', productoController.getProductoById);
// Crear un nuevo usuario
router.post('/productos', productoController.createProducto);
// Actualizar un usuario existente
router.put('/productos/:id', productoController.updateProducto);
// Eliminar un usuario
router.delete('/productos/:id', productoController.deleteProducto);
module.exports = router;