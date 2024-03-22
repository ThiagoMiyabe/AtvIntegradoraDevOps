const Sequelize = require("sequelize")
const database = require("../db")

const Usuario = database.define("usuario", {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  confirmed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Por padrão, o usuário não está confirmado
  },
  confirmationToken: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
  confirmationExpires: {
    type: Sequelize.DATE,
    allowNull: true,
  },
})

module.exports = Usuario
