const express=require('express')
const connectdb=require('./config/connectdb')
//initialisation 
const app=express()

//creation notre server
require('dotenv').config()
const port=process.env.PORT
connectdb()
app.use(express.json())
app.use('/product',require('./routes/products'))
 app.listen(port,(err)=>
 err?console.log(err):console.log("server is running"+port))
