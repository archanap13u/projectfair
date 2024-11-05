//installed .env import here and config

//assign express in a sexprss vrianl

//create server instance using express and convert it in to listen mode
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Router/router')
require('./connection/db')//connection of server and db

const pfserver=express()
pfserver.use(cors())
pfserver.use(express.json())//json() is a middleware used to trsansfrom json content into js 
//mddllewares are the special function play as a intermediste btween server and user
pfserver.use(router)

const PORT=3001 || process.env.PORT
pfserver.listen(PORT,()=>{
    console.log('server running')
})
pfserver.get('/',(req,res)=>{
    res.send('<h1>request is hit</h1>')
})