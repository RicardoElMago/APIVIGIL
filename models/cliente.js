// models/cliente.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config'));
const cliente = sequelize.define('cliente', {
id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
dni: {
type: DataTypes.INTEGER,
allowNull: false
},
nombre: {
type: DataTypes.STRING,
allowNull: false
},
apellidos: {
type: DataTypes.STRING,
allowNull: false
},
direccion: {
type: DataTypes.STRING,
allowNull: false
},
edad: {
type: DataTypes.INTEGER,
allowNull: false
}
});
module.exports = cliente;