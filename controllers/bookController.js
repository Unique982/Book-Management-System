const { books } = require("../database/config");



// fetch all Book
exports.fetchBook = async (req,res)=>{
const datas = await books.findAll();
  res.json({
    msg:"Book Get Successfully",
    datas
  })
}

// adding book 
exports.addBook = async(req,res)=>{
  const {bookName,bookPrice,bookAuthor,bookGenre} = req.body;
  if(!bookName || !bookAuthor || !bookPrice || !bookGenre){
    return res.json({
      message:"All fields are required",
    })

  }
  console.log(req.body)
  await books.create({
  bookName,bookPrice,bookAuthor,bookGenre
  })
  res.json({
    mgs:"Book Post Sucessfully"
  })
}

// update book 
 exports.updateBook = async(req,res)=>{
  try{
  const id = req.params.id
  const {bookName,bookPrice,bookAuthor,bookGenre} = req.body;
  await books.update({bookName:bookName,bookPrice:bookPrice,bookAuthor:bookAuthor,bookGenre:bookGenre},{where:{
    id:id
  }})
  res.json({
    msg:"Book Update Successfully"
  })
} catch(err){
  res.json({
    message:"Error"
  })

}
}

// delete Book
exports.deleteBook =async(req,res)=>{
  const id = req.params.id
  const datas = await books.destroy({
    where:{id}
  })
  res.json({
    msg:"Book Delete Successfully"
  })
}

// single fetch Data
exports.singleFetchBook =async(req,res)=>{
  const id = req.params.id
  const datas = await books.findByPk(id)
  res.json({
    message:"Single data Fetched Successfully",
    datas
  })
}

