var express = require('express');
var router = express.Router();
var Pessoa = require('../controllers/pessoas')

/* GET home page. */
router.get('/pessoas', function(req, res) {
  Pessoa.list()
  .then(pessoas => res.status(200).json(pessoas))
  .catch(erro => res.status(520).json({erro:erro, mensagem:"Não consegui obter a lista de pessoas."}))
});

router.get('/pessoas/:id', function(req, res) {
  Pessoa.getPessoa(req.params.id)
  .then(pessoa => res.status(200).json(pessoa))
  .catch(erro => res.status(521).json({erro:erro, mensagem:"Não consegui obter a pessoa."}))
});

router.post('/pessoas', function(req, res){
  Pessoa.addPessoa(req.body)
  .then(pessoa => {
    console.log("json(pessoa)")
    res.status(200).json(pessoa)
  })
  .catch(erro => res.status(522).json({erro:erro, mensagem:"Não consegui adicionar a pessoa."}))
});

router.put('/pessoas/:id', function(req, res){
  Pessoa.updatePessoa(req.params.id,req.body)
  .then(pessoa => res.status(200).json(pessoa))
  .catch(erro => res.status(523).json({erro:erro, mensagem:"Não consegui alterar a pessoa."}))
});

router.delete('/pessoas/:id', function(req, res){
  Pessoa.deletePessoa(req.params.id)
  .then(pessoa => res.status(200).json(pessoa))
  .catch(erro => res.status(524).json({erro:erro, mensagem:"Não consegui eliminar a pessoa."}))
});

module.exports = router;
