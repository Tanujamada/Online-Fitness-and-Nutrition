
//import mongoose
const mongoose=require('mongoose')


//create user schema
const userSchema=new mongoose.Schema({
 /*username:String,
 email:String,
 age:Number*/
  username:{
   type:String,
   required:[true,'username is required but it is missed'],
   minlength:[4,'minimum lenght can be 4']
  },
  password:{
    type:String,
    required:[true,'password is required but it is missed'],
    minlength:6
  },
  email:{
   type:String
  },
  dob:{
   type:Date
  },
  gender:{
    type:String,
    required:[true,'gender is required but it is missed']
  },
  address:{
    type:String
  },
  mobile:{
    type:String,
    required:[true,'mobile number is required but it is missed']
  }

})


//create model for userSchema
const User=mongoose.model('user',userSchema)


//export User model
module.exports=User