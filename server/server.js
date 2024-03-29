//create express app
const exp=require('express')
const app=exp()
const path=require('path')


//import mongoose
const mongoose=require('mongoose')
//add body parse middleware
app.use(exp.json())


//connect angular app with server
app.use(exp.static(path.join(__dirname,'../client/dist/online-fitness/browser')))

//configure environment variables
require('dotenv').config()




const DB_URL=process.env.ATLAS_DB_URL

//connect with db
mongoose.connect(DB_URL)
.then(()=>console.log("DB connection succesful"))
.catch(err=>console.log("error occured",err))

//import api
const usersApp=require('./APIs/user-api')



//forward req to userApp when path starts with '/user-api'
app.use('/user-api',usersApp)



//errror handler
app.use((err,req,res,next)=>{
 res.send({message:"error occured",payload:err.message})
})

//assign port number
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`web server listening on port number ${PORT}`))