const mongoose = require('mongoose');
const validator = require('validator');


const catalogueSchema = mongoose.Schema({
  title:{
    type: String,
    required:true,
  },
  description:{
    type:String,
  },
  productImage:{
    type: Buffer,
  },
  price:{
    type:Number,
    required:true,
  },
  sizes:{
    type:Array,
  },

},
)


catalogueSchema.methods.toJSON= function (){
  const order=this
  const orderObject= order.toObject()

  delete orderObject.productImage

  return orderObject
}
const Catalogue = mongoose.model('Catalogue',catalogueSchema)

module.exports=Catalogue;
