const express = require("express")
const { Op } = require("sequelize")
var bodyParser = require("body-parser")
const app = express()
const path = require("path")
const rotas = require("./rotas")
const sequelize = require("./db")

sequelize.sync().then(() => {
  console.log("Banco conectado")
})

app.use(bodyParser.json())
app.use(rotas)
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
app.use("/public", express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))

app.listen(3000, () => {
  console.log("O servidor esta funcionando na porta 3000")
})

app.get("/", (req, res) => {
  res.render("index")
})
