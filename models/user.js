// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config'));
const User = sequelize.define('usuarios', {
 id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 nombre: {
 type: DataTypes.STRING,
 allowNull: false
 },
 correo: {
 type: DataTypes.STRING,
 allowNull: false,
 unique: true
 }
});
module.exports = User;
