const Sequelize = require("sequelize")
const database = require("../db")
const Usuario = require("./usuario")

const Tarefas = database.define("tarefas", {
  id_tarefa: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_tarefa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao_tarefa: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  dia_tarefa: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  concluida: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  importancia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

Tarefas.belongsTo(Usuario, {
  constraint: true,
  foreignKey: "fk_id_usuario",
})
module.exports = Tarefas
