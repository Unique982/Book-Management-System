
// database connection code 
const {Sequelize,DataTypes} = require("sequelize")
const sequelize = new Sequelize("Your database connection String")

sequelize.authenticate().then(()=>{
  console.log("Authenticate Vayo ,Connection vayo!")
}).catch((err =>{
  console.log("error connction",err);

}))

// object create
 const db = {}
 db.Sequelize = Sequelize
 db.sequelize = sequelize

 // export code 
 module.exports = db

