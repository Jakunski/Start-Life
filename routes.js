const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index')
})
router.get("/index2", (req, res) => {
    res.render("index2")
})    

router.get("/sobre/:id", (req, res) => {

    const id = req.params.id
    
    res.render("sobre", { id })
})

module.exports = router