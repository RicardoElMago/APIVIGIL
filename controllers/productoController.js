// controllers/userController.js
const Producto = require('../models/productos');
// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
 try {
 const productos = await Producto.findAll();
 res.json(productos);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al obtener productos' });
 }
};
// Obtener un producto por su ID
exports.getProductoById = async (req, res) => {
 try {
 const productosId = req.params.id;
 const productos = await Producto.findByPk(productosId);
 if (!productos) {
 return res.status(404).json({ message: 'producto no encontrado' });
 }
 res.json(productos);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al obtener productos' });
 }
};
// Crear un nuevo producto
exports.createProducto = async (req, res) => {
 try {
 const { nombre, stock } = req.body;
 const newProducto = await Producto.create({ nombre, stock });
 res.status(201).json(newProducto);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al crear producto' });
 }
};
// Actualizar un producto existente
exports.updateProducto = async (req, res) => {
 try {
 const productosId = req.params.id;
 const { nombre, stock } = req.body;
 const producto = await Producto.findByPk(productosId);
 if (!producto) {
 return res.status(404).json({ message: 'Usuario no encontrado' });
 }
 producto.nombre = nombre;
 producto.stock = stock;
 await producto.save();
 res.json(producto);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al actualizar usuario' });
 }
};
// Eliminar un producto
exports.deleteProducto = async (req, res) => {
 try {
 const productosId = req.params.id;
 const producto = await Producto.findByPk(productosId);
 if (!producto) {
 return res.status(404).json({ message: 'Usuario no encontrado' });
 }
 await producto.destroy();
 res.json({ message: 'Usuario eliminado exitosamente' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al eliminar usuario' });
 }
};
