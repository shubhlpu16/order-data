const express = require('express');
const Orders = require('../models/orders');

const router= new express.Router()


router.post('/orders',async(req,res)=>{
  const order = new Orders({
    ...req.body,
  })

  console.log(order)
  try {
  await order.save()
    res.status(201).send(order)
  } catch (e) {
    res.status(400).send(e)
  }
})


router.get('/orders', async(req,res)=>{


  try {
    const orders =  await Orders.find(req.query)

    res.send(orders)
  } catch (e) {
    res.status(500).send()
  }
})

// router.get('/tasks/:id',async(req,res)=>{
//   const _id=req.params.id
//
//   try {
//     const task = await Task.findOne({_id,owner:req.user._id})
//
//     if(!task)
//     {
//       return res.status(404).send()
//     }
//
//     res.send(task)
//   } catch (e) {
//     res.status(500).send()
//   }
// })
//
//
//
//
// router.delete('/tasks/:id', async(req,res)=>{
//
//   try {
//     const task = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
//     console.log(task);
//     if(!task)
//     {
//       return res.status(404).send()
//
//     }
//     res.send(task)
//   } catch (e) {
//     res.status(500).send()
//   }
// })



module.exports =router
