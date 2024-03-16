
//import mongoose
const mongoose=require('mongoose')


const adminSchema=new mongoose.Schema({
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
  aadharNumber:{
    type:String,
    required:[true,'aadhar number is required but it is missed']
  },
  address:{
    type:String
  },
  mobile:{
    type:String,
    required:[true,'mobile number is required but it is missed']
  }

})


//create model for adminSchema
const Admin=mongoose.model('admin',adminSchema)

//export Admin
module.exports=Admin