//create express app
const exp=require('express')
const app=exp()

//configure environment variables
require('dotenv').config()

//add body parse middleware
app.use(exp.json())

//import api
const userApp=require('./APIs/user-api')

//forward req to userApp when path starts with '/user-api'
app.use('/user-api',userApp)

//errror handler
app.use((err,req,res,next)=>{
 res.send({message:"err.message",payload:"err"})
})

//assign port number
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`web server listening on port number ${PORT}`))