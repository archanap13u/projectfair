
const users=require('../model/userModel')
const jwt=require('jsonwebtoken')
exports.userRegister= async(req,res)=>{
    try{

    
   const {email,username,password}=req.body
   if(!email || !username || !password){
    res.status(406).json("Invalid Data")
   }
   else{
    const newUser=new users({email,username,password})
    await newUser.save()//this is a async function so use await and async
    res.status(200).json(newUser)
   }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }

    
}

exports.userLogin=async(req,res)=>{
    // console.log(req.body)
    try{
        const{email,password}=req.body
        const existing=await users.findOne({email,password})//here , indicates and operater
        if(existing){
            // res.status(200).json(existing)
            const token=jwt.sign({userid:existing._id},process.env.SECRET_KEY)
            res.status(200).json({token,username:existing.username})
        }
        else{
            res.status(406).json("invalid email/password")
        }
    }
  
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
    
}

