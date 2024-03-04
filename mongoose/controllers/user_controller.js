//get users
const getUsers=(req,res)=>{
 res.send({message:"this is all users data"})
}

//get user by username
const getUserByUsername=(req,res)=>{
 res.send({message:"one user data"})
}

//create user
const createUser=(req,res)=>{
 res.send({message:"user created"})
}

//update user
const updateUser=(req,res)=>{
 res.send({message:"user updated"})
}

//delete user by username
const deleteUserByUsername=(req,res)=>{
 res.send({message:"user deleted"})
}



//export
module.exports={getUsers,getUserByUsername,createUser,updateUser,deleteUserByUsername}