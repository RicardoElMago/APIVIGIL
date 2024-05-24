// controllers/userController.js
const User = require('../models/user');
// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
 try {
 const users = await User.findAll();
 res.json(users);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al obtener usuarios' });
 }
};
// Obtener un usuario por su ID
exports.getUserById = async (req, res) => {
 try {
 const userId = req.params.id;
 const user = await User.findByPk(userId);
 if (!user) {
 return res.status(404).json({ message: 'Usuario no encontrado' });
 }
 res.json(user);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al obtener usuario' });
 }
};
// Crear un nuevo usuario
exports.createUser = async (req, res) => {
 try {
 const { nombre, correo } = req.body;
 const newUser = await User.create({ nombre, correo });
 res.status(201).json(newUser);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al crear usuario' });
 }
};
// Actualizar un usuario existente
exports.updateUser = async (req, res) => {
 try {
 const userId = req.params.id;
 const { nombre, correo } = req.body;
 const user = await User.findByPk(userId);
 if (!user) {
 return res.status(404).json({ message: 'Usuario no encontrado' });
 }
 user.nombre = nombre;
 user.correo = correo;
 await user.save();
 res.json(user);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al actualizar usuario' });
 }
};
// Eliminar un usuario
exports.deleteUser = async (req, res) => {
 try {
 const userId = req.params.id;
 const user = await User.findByPk(userId);
 if (!user) {
 return res.status(404).json({ message: 'Usuario no encontrado' });
 }
 await user.destroy();
 res.json({ message: 'Usuario eliminado exitosamente' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error al eliminar usuario' });
 }
};
