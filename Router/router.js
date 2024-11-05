const express=require('express')
const userControlls=require('../Controllers/userControls')
const projecontrolls=require('../Controllers/Projectconrols')
const jwtMiddleware=require('../middlewaress/Jwtmiddleware')
const multerMIddleware=require('../middlewaress/multermiddleware')
const route=express.Router()

route.post('/reg',userControlls.userRegister)
route.post('/log',userControlls.userLogin)
route.post('/addproject',jwtMiddleware,multerMIddleware.single('image'),projecontrolls.addproject)
route.get('/getproject',jwtMiddleware,projecontrolls.getProjets)
route.delete('/deleteproject/:pid',jwtMiddleware,projecontrolls.deleteprojects)
route.put('/updateproject/:pid',multerMIddleware.single('image'),jwtMiddleware,projecontrolls.deleteprojects)
module.exports=route