const Sequelize = require("sequelize")
const database = require("../db")
const Usuario = require("./usuario")

const Metas = database.define("metas", {
  id_metas: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_meta: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao_meta: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  concluida: {
    type: Sequelize.STRING,
    allowNull: true,
  },
})

Metas.belongsTo(Usuario, {
  constraint: true,
  foreignKey: "fk_id_usuario",
})
module.exports = Metas
