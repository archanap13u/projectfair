const mongoose=require('mongoose')
//schemq creation
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
//model creation 

const users=mongoose.model('users',userSchema)
module.exports=users