const jwt=require('jsonwebtoken')
const jwtMiddleware=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        const data=jwt.verify(token,process.env.SECRET_KEY)
        console.log(data)
        if(data){
            const{userid}=data
            req.payload=userid
            next()
        }
        else{
            res.status(400).json("invalid token")
        }
    }
    catch(err){
        console.log(err)
        res.status(404).json(err)
    }
    next()
}
module.exports=jwtMiddleware