// importar o express
const express = require("express")
// iniciar as Rotas
const router = express.Router()

// copiar do nosso app.js e apagar de lá. Trocar o verbo para Router

// exportar para ter acessos em outros locais
router.post('/add-product', (req, res) => {
    res.send({created: "OK",
    method: "POST"});
})

router.get('/add-product', (req, res) => {
    res.send({created: "OK",
    method: "GET"});

})

router.post('/delete-product', (req, res) => {
    res.send({created: "OK"});
})

module.exports = router