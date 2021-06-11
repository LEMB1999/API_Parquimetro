
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
//base de datos conexion
require("./conection")

app.use(bodyParser.urlencoded({extended:true}))
app.use(require("./routers/router"))

app.listen(3000,()=>{
    console.log("server listening")
})




















   