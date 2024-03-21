//create mini express app
const exp=require('express')
const userApp=exp.Router()


//get express-async-handler
const expressAsyncHandler=require('express-async-handler')

//import req handlers 
const {getUsers,getUserByUsername,createUser,loginUser,updateUser,deleteUserByUsername,getSensitiveData}=require('../controllers/user_controller')

//import middlewares
const verifyToken=require('../middlewares/verifyToken')

//user CRUD operations
//get users data
userApp.get('/users',expressAsyncHandler(getUsers))

//get user by username
userApp.get('/user/:username',expressAsyncHandler(getUserByUsername))

//create user
userApp.post('/user',expressAsyncHandler(createUser))

//login user
userApp.post('/user-login',expressAsyncHandler(loginUser))


//update user
userApp.put('/user',expressAsyncHandler(updateUser))

//delete user by username
userApp.delete('/user/:username',expressAsyncHandler(deleteUserByUsername))

//protected route
userApp.get('/user-sensitive-data',verifyToken,expressAsyncHandler(getSensitiveData))








//export userapp
module.exports=userApp