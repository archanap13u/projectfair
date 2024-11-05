const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(res=>{
    console.log("server connected to mongoDB")
}).catch(err=>{
    console.log(err)
})