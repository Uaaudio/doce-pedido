const express = require("express")
const app = express();
const path = require("path")
const bodyParser = require("body-parser")
const PORT = 3001

// Importando minha conexão com o banco.
const Connection = require("./config/database/connection");

//sincronizando tabelas.
//const Category = require("./config/database/models/Category")
//const Product = require("./config/database/models/Product")


//configurando View engine.
const ejs = require("ejs")
app.set("view engine", "ejs")
app.set("views", path.join(__dirname ,'../frontend/pages'))
app.use(express.static("../frontend"))

//Fazendo Sincronizaçao com o banco.
Connection.authenticate()
    .then((error)=>{
        console.log("Banco Conectado com Sucesso!!");
    }).catch(()=>{
        console.log("Falha ao conectar com o banco")
        console.log("Erro: ",error.message)
    })

//configurando body parser.
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())



// importando minhas rotas.
const categoryRoute = require("./routes/categoryRoute")
const productRoute =  require("./routes/productRoute")
const homeRoute = require("./routes/homeRoute")

// Usando minhas rotas.
app.use("/",homeRoute)
app.use("/category",categoryRoute)
app.use("/product",productRoute)




app.listen(PORT,()=>{
    console.log("Aplicação Rodando na porta " + PORT)
})