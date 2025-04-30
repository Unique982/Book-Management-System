// express required
 const express= require("express")
 // import module
 const {books} = require('./database/config')
 const dotenv = require('dotenv').config()

const app = express()
 // Josn Data reader

 app.use(express.json())

 app.get("/",(req,res)=>{
  res.send("Hello");
 })
 app.get("/about",(req,res) =>{
  res.json({
    name:"Unique",
    address:"KTM"
  })
 })
 
//  book Store Project  code day 7 crud 
// get book 
app.get("/book",async (req,res)=>{
const datas = await books.findAll();
  res.json({
    msg:"Book Get Successfully",
    datas
  })
})

// post book 
app.post("/book", async(req,res)=>{
  const {bookName,bookPrice,bookAuthor,bookGenre} = req.body;
  console.log(req.body)
  await books.create({
  bookName,bookPrice,bookAuthor,bookGenre
  })
  res.json({
    mgs:"Book Post Sucessfully"
  })
})

// patch book / update
app.patch("/book/:id",(req,res)=>{
  res.json({
    msg:"Book Update Successfully"
  })
})

// delete Book 
app.delete("/book/:id",(req,res)=>{
  res.json({
    msg:"Book Delete Successfully"
  })
})



 app.listen(3000,()=>[
  console.log(`Server  is running address http://localhost:3000`)
 ])