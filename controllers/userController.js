//Aula 3

exports.registrar = (req, res) => {
    const { register_cep, register_logradouro, register_bairro } = req.body

    console.log("Registrado com sucesso")
    console.log(`
        No bairro: ${register_bairro}\n
        Na rua: ${register_logradouro}    
    `)

    res.status(200).send("Registrado com sucesso")
}

//Aula 4 