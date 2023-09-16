const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.static("views"));

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res) =>{
    res.status(404).send({
        error: true,
        message: "Not found..."
    })
})

app.listen(3001)