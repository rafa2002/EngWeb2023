var Pessoa = require('../models/pessoas')

// +People list
module.exports.list = () => {
    return Pessoa.find().sort({id:1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPessoa = id => {
    return Pessoa.findOne({id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addPessoa = a => {
    return Pessoa.create(a)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.updatePessoa = a => {
    return Pessoa.updateOne({id:a.id},a)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePessoa = id => {
    return Pessoa.deleteOne({id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}