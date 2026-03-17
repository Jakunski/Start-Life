const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

const routes = require('./routes')
app.use('/', routes)

app.listen(3000)