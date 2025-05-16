// express required
 const express= require("express")
 // import module

 const dotenv = require('dotenv').config()
// cros
const cros = require('cros')
const app = express()
 // Josn Data reader

 app.use(express.json())
 app.use(cros({
  origin:"http://localhost:5173"
 }))

 // route 
 const bookRouter = require('./routes/bookRoutes');
 // localhost:3000/api/book
 //app.use("api",bookRouter)

app.use("",bookRouter)



 app.listen(3000,()=>[
  console.log(`Server  is running address http://localhost:3000`)
 ])