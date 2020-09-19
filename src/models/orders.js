const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = mongoose.Schema({
  totalAmount:{
    type: Number,
    required :true,
  },
  totalQuantity:{
    type:Number,
    required:true,
  },
  userName: {
    type:String,
    required:true,
  },
  city:{
    type:String,
    required:true,
  },
  status:{
    type: String,
    default: "pending",

  },
  productCount:{
    type:Number,
    required:true,
  }
},
{
  timestamps:true
})

const Orders = mongoose.model('Orders',orderSchema)

module.exports=Orders;
