//create mini express app
const exp=require('express')
const userApp=exp()

//get express-async-handler
const expressAsyncHandler=require('express-async-handler')

//import req handlers 
const {getUsers,getUserByUsername,createUser,updateUser,deleteUserByUsername}=require('../controllers/user_controller')

//user CRUD operations

//get users data
userApp.get('/users',expressAsyncHandler(getUsers))

//get user by username
userApp.get('/user/:username',expressAsyncHandler(getUserByUsername))

//create user
userApp.post('/user',expressAsyncHandler(createUser))

//update user
userApp.put('/user',expressAsyncHandler(updateUser))

//delete user by username
userApp.delete('/user/:username',expressAsyncHandler(deleteUserByUsername))









//export userapp
module.exports=userApp