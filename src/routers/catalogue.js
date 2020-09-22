const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const Catalogue  = require('../models/catalogue');


 const router = new express.Router();

 const upload = multer(
   {
     limits:{
       fileSize : 2000000,
     },
  }
 )

 const type=upload.single('productImage')

 router.post('/catalogue',type,async(req,res)=>{
   const buffer=await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer()
   const order =new Catalogue({...req.body})
   order.productImage=buffer
   await order.save()
   res.status(201).send(order)
 },(error,req,res,next)=>{
   res.status(400).send({error:error.message})
 })


 router.get('/catalogue',async(req,res)=>{
   try {
   const orders= await Catalogue.find()
   res.send(orders)
 } catch (e) {
   res.status(404).send()
 }
 })

 router.get('/catalogue/image',async(req,res)=>{
   try {
     console.log(req);
     const order =await Catalogue.findOne({_id:req.query.id})
     console.log(order);
     res.set('Content-Type','image/png')
     res.send(order.productImage)
   } catch (e) {
     res.status(404).send()
   }
 })


 module.exports= router;
