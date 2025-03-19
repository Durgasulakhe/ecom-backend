const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String
    },
    stock:{
        type:Number
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
})

const product = mongoose.model('Product',productSchema);
module.exports = {product};