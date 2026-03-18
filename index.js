const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

const app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.use('/', routes)

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})