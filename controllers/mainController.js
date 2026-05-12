exports.main = (req, res) => {
    res.render('index')
}

exports.sobre = (req, res) => {
    res.render('sobre')
}

//Aula 1 Usuario
exports.namePost = (req, res) => {
    console.log(req.body)
    const nome = req.body.user_name

    res.render('profile', { nome })
}

//Aula 2 CEP
exports.sobrePost = async (req, res) => { 
    const cepDigitado = req.body.cep
    console.log(`O CEP digitado foi: ${cepDigitado}`)

    const resposta = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
    
//Aula 3 Status
if (resposta.status != 200) {
        return res.redirect("/sobre")
    }

    const body = await resposta.json()

    const { cep, logradouro, bairro } = body
    
    res.render("profile", { cep, logradouro, bairro })

}
