const express = require("express")
const { engine } = require("express-handlebars")
const bodyParser = require('body-parser')
const path = require("path")
const routes = require("./routes")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'views/css/'))) // Indicando pasta de arquivos estáticos css, pode ser usado para js e outros.
app.use(express.static(path.join(__dirname, 'views/js/')))

app.use("/", routes)

app.listen(3000, () => {
    console.log('Servidor rodando http://localhost:3000')
})