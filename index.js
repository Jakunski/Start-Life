const express = require("express")
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
const { engine } = require("express-handlebars")
const bodyParser = require('body-parser')
>>>>>>> 213df6e (atualizando código)

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/sobre/{:id}", (req, res) => {

    const id = req.params.id
    
    res.render("sobre", { id })
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
>>>>>>> a575acc (commit inicial)
})