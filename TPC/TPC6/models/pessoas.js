const mongoose = require('mongoose')

/*
Define the attributes for our user model
{"nome","idade","sexo","morada": {"cidade", "distrito"}, 
    "BI", "profissao", "partido_politico", "religiao", "desportos", "animais",
    "figura_publica_pt", "marca_carro", "destinos_favoritos", "atributos", "id"}
*/

/*
{"nome": "Neyanne Sampaio", "idade": 47, "sexo": "feminino", ´
"morada": {"cidade": "Ferreira do Alentejo", "distrito": "Beja"}, 
"BI": "91702023-5", "profissao": "Programador de aplica\u00e7\u00f5es", 
"partido_politico": {"party_abbr": "Ref", "party_name": "Reformistas"}, 
"religiao": "Tao\u00edsmo", "desportos": ["Peteca", "Rugby de praia", "Futebol Canadense"], 
"animais": ["Lagarto", "Lobo"], "figura_publica_pt": ["Gisela Jo\u00e3o"], 
"marca_carro": "Mini", "destinos_favoritos": ["Vietname"], 
"atributos": {"fumador": true, "gosta_cinema": false, "gosta_viajar": false, "acorda_cedo": false, "gosta_ler": false, "gosta_musica": true, "gosta_comer": false, "gosta_animais_estimacao": true, "gosta_dancar": false, "comida_favorita": "vegetariana"},
 "id": "p0"}
*/

var pessoaSchema = new mongoose.Schema({
    id: String,
    nome: String,
    idade: Number,
    BI: String,
    profissão: String,
    sexo: String,
    morada: {
        cidade: String,
        distrito: String
    },
    partido_politico: String,
    religiao: String,
    desportos: [String],
    animais: [String],
    figura_publica_pt: [String],
    marca_carro: String,
    destinos_favoritos: [String],
    atributos: {
        fumador: Boolean,
        gosta_cinema: Boolean,
        gosta_viajar: Boolean,
        acorda_cedo: Boolean,
        gosta_ler: Boolean,
        gosta_musica: Boolean,
        gosta_comer: Boolean,
        gosta_animais_estimacao: Boolean,
        gosta_dancar: Boolean,
        comida_favorita: String
    }
})

module.exports = mongoose.model('pessoa', pessoaSchema)