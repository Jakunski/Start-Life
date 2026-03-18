const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Página 1' })
})

router.get('/pagina2', (req, res) => {
  res.render('index2', { title: 'Página 2' })
})

module.exports = router