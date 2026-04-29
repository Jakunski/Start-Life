exports.main = (req, res) => {
    res.render('index')
}

exports.sobre = (req, res) => {
    res.render('sobre')
}

exports.sobrePost = (req, res) => {
    console.log(req.body)
    const nome = req.body.user_name

    res.render('profile', { nome })
}