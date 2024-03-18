
//import User model
const User=require('../models/user')


//import bcryptjs
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config()



//get users
const getUsers=async (req,res)=>{
 const usersList=await User.find()
 res.status(200).send({message:"this is all users data",payload:usersList})
}

//get user by username
const getUserByUsername=async(req,res)=>{
 let username=req.params.username
 const user=await User.findOne({username:username})
 res.send({message:"one user data",payLoad:user})
}

//create user
const createUser=async (req,res)=>{
       //check for existing user
       let newUser=await User.findOne({username:req.body.username})
       //if user existed
       if(newUser!=null){
              return res.status(200).send({message:"user already existed"})
       }
       //if user not existed,then hash password
       const hashedPassword=await bcryptjs.hash(req.body.password,6)
       req.body.password=hashedPassword;
 //console.log(req.body)
 //here create()=create document+save in collection
 let user=await User.create(req.body)
        //or
//  const userDocument=new User(req.body)
//  const user=await userDocument.save()

 res.status(201).send({message:"user created",payload:user})
}


//login user
const loginUser=async (req,res)=>{
       //get user credentials
       let newUser=await User.findOne({username:req.body.username})
       //if invalid username
       if(newUser===null){
              return res.status(200).send({message:"invalid username"})
       }
       //if username was found compare passwordss
       const result=await bcryptjs.compare(req.body.password,newUser.password)
       //if password not matched
       if(result===false){
              return res.status(200).send({message:"invalid password"})
       }
       //create jwt token and sign it
       const signedToken=jwt.sign({username:newUser.username},process.env.SECRET_KEY,{expiresIn:"1d"})
       res.status(400).send({message:"login successful",token:signedToken,user:newUser})
}


//update user
const updateUser=async(req,res)=>{
 let user=await User.findOneAndUpdate({username:req.body.username},{...req.body}) 
 res.status(200).send({message:"user updated",payload:user})
}

//delete user by username
const deleteUserByUsername=async(req,res)=>{
 let username=req.params.username
 let user=await User.findOneAndDelete({username:username})
 res.status(200).send({message:"user deleted",payload:user})
}

//protected route
const getSensitiveData=async(req,res)=>{
    res.send({message:"users sesitive data is here"})   
}

//export
module.exports={getUsers,getUserByUsername,createUser,loginUser,updateUser,deleteUserByUsername,getSensitiveData}