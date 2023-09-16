const path = require('path')
const express = require("express")
const router = express.Router()

//Importar o path para gerencimento de endereço dos arquivos
//para serem servidos

router.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
})

router.get('/brands', (req, res) => {
    res.send({created: "OK"});
})

module.exports = router
