const mongoose = require("mongoose"); //import mongoose

// product schema
const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: String,
    price: Number,
});

const Product = mongoose.model('Product', productSchema); //convert to model named product
module.exports = Product; //export for controller use