const express = require('express')
const path = require("path")

const app = express()

const PORT = process.env.PORT || 3000

const filePath = path.join(__dirname, "index.html")

app.get("/", (req, res)=> {
    res.sendFile(filePath)
})

app.listen(PORT, ()=> {
    console.log(`Server is up on ${PORT}`);
})