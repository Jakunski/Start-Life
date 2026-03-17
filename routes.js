const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index') // sua pagina1
})

router.get('/pagina2', (req, res) => {
  res.render('index2') // sua pagina2
})

router.get('/sobre/:id', (req, res) => {
  const id = req.params.id
  res.render('sobre', { id })
})

module.exports = router