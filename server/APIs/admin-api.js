const exp=require('express')
const adminApp=exp.Router()

//get express-async-handler
const expressAsyncHandler=require('express-async-handler')

//import req handlers 
const {createAdmin,loginAdmin}=require('../controllers/admin_controller')

//import middlewares
const verifyToken=require('../middlewares/verifyToken')



//create admin
adminApp.post('/admin',expressAsyncHandler(createAdmin))


//login admin
adminApp.post('/login',expressAsyncHandler(loginAdmin))



//export userapp
module.exports=adminApp
