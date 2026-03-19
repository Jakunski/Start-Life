const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

const app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('Public'))

app.use('/', routes)

app.listen(5000, '0.0.0.0', () => {
  console.log('Servidor rodando em http://0.0.0.0:5000')
})
