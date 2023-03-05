const express = require('express')
const path = require("path")

require('./db/mongoose')

const emailRouter = require('./routers/email')
const clickRouter = require('./routers/click')

const app = express()

app.use(express.static('public'));
app.use(express.json())

const PORT = process.env.PORT || 3000

const filePath = path.join(__dirname, "public", "index.html")

const apiRoute = "/api"

app.use(apiRoute, emailRouter)
app.use(apiRoute, clickRouter)

app.get("/*", (req, res)=> {
    res.sendFile(filePath)
})

app.listen(PORT, ()=> {
    console.log(`Server is up on ${PORT}`);
})