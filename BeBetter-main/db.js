const Sequelize = require("sequelize")
require("dotenv").config()
const port = process.env.port
const host = process.env.host
const dbname = process.env.dbname
const dbuser = process.env.dbuser
const dbpass = process.env.dbpass
const sequelize = new Sequelize(dbname, dbuser, dbpass, {
  dialect: "mysql",
  host: host,
  port: port,
})

module.exports = sequelize
