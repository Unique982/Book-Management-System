
// database connection code 
const {Sequelize,DataTypes} = require("sequelize")
const dotenv = require('dotenv').config()

//  const bookModel= require('/models/bookModel');

const sequelize = new Sequelize(process.env.DBSTRING)

sequelize.authenticate().then(()=>{
  console.log("Authenticate Vayo ,Connection vayo!")
}).catch((err =>{
  console.log("error connction",err);

}))

// object create
 const db = {}
 db.Sequelize = Sequelize
 db.sequelize = sequelize

 // call garay ko 
//  db.Book = bookModel(sequelize,DataTypes)
                    
db.books = require('../models/bookModel')(sequelize,DataTypes);// 

// migrate  code here
sequelize.sync({alter:false}).then(()=>{
  console.log("Migrate Successfully");
})

 // export code 
 module.exports = db

