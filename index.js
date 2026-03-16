const express = require("express")
const { engine } = require("express-handlebars")
const bodyParser = require('body-parser')
const path = require("path")
const routes = require("./routes")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'views/css/')))
app.use(express.static(path.join(__dirname, 'views/js/')))

<<<<<<< HEAD

=======
>>>>>>> ae4fcb7 (aula 16-03)
app.use("/", routes)

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})