// express required
 const app= require("express")()
 // import module
 const db = require('./database/config')

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
app.get("/book",(req,res)=>{
  res.json({
    msg:"Book Get Successfully"
  })
})

// post book 
app.post("/book",(req,res)=>{
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