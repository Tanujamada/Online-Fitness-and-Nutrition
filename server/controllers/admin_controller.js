//import admin model
const Admin=require('../models/admin')


//import bcryptjs
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config()


//create admin
const createAdmin=async(req,res)=>{
 //check for existing user
 let newAdmin=await Admin.findOne({username:req.body.username})
 //if user existed
 if(newAdmin!=null){
        return res.status(200).send({message:"admin already existed"})
 }
 //if user not existed,then hash password
 const hashedPassword=await bcryptjs.hash(req.body.password,6)
 req.body.password=hashedPassword;
//console.log(req.body)
//here create()=create document+save in collection
//let user=await User.create(req.body)
  //or
const adminDocument=new Admin(req.body)
const admin=await adminDocument.save()

res.status(201).send({message:"admin created",payload:admin})
}


//login admin
const loginAdmin=async (req,res)=>{
 //get user credentials
 let newAdmin=await Admin.findOne({username:req.body.username})
 //if invalid username
 if(newAdmin===null){
        return res.status(200).send({message:"invalid username"})
 }
 //if username was found compare passwordss
 const result=await bcryptjs.compare(req.body.password,newAdmin.password)
 //if password not matched
 if(result===false){
        return res.status(200).send({message:"invalid password"})
 }
 //create jwt token and sign it
 const signedToken=jwt.sign({username:newAdmin.username},process.env.SECRET_KEY,{expiresIn:"1d"})
 res.status(400).send({message:"login successful",token:signedToken,admin:newAdmin})
}


//export
module.exports={createAdmin,loginAdmin}