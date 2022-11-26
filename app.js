 const express = require("express")

 const app = express()

 app.get("/", (req, res) => {
    console.log("Petición recibida")
    res.send(frontend/index.html)
 })

 app.listen(4000, () => {
    console.log("servidor escuchando")
 })