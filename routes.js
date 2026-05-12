const express = require('express')
const router = express.Router()
const mainController = require('./controllers/mainController')
const userController = require('./controllers/userController')

router.get('/', mainController.main)

router.get('/index2', (req, res) => {
    res.render('index2')
})

router.get('/sobre', mainController.sobre)
router.post('/sobre', mainController.sobrePost)

router.get('/sobre/:id', (req, res) => {
    const id = req.params.id
    res.render('sobre', { id })
})

// Aula 3
router.post("/registrar", userController.registrar)

router.post('/name', mainController.namePost)

module.exports = router