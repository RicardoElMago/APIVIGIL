// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config'));
const productos = sequelize.define('productos', {
 codigo: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 nombre: {
 type: DataTypes.STRING,
 allowNull: false
 },
 stock: {
 type: DataTypes.INTEGER,
 allowNull: false,
 }
});
module.exports = productos;