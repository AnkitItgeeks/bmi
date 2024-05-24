const mongoose = require('mongoose')

 const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
 })

 const UserModel = mongoose.model("newusers", UserSchema)
 
 module.exports = UserModel