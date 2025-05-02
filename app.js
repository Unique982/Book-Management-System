// express required
 const express= require("express")
 // import module
 const {books} = require('./database/config')
 const dotenv = require('dotenv').config()

const app = express()
 // Josn Data reader

 app.use(express.json())

 // route 
 const bookRouter = require('./routes/bookRoutes');
 // localhost:3000/api/book
 //app.use("api",bookRouter)

app.use("",bookRouter)



 app.listen(3000,()=>[
  console.log(`Server  is running address http://localhost:3000`)
 ])