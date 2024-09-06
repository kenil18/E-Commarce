const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    ProductName : {
        type : String,
        required : true
    },
    ProductPrice : {
        type : String,
        required : true
    },
    ProductQuantity : {
        type : String,
        required : true
    },
    ProductDescription : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
      }
});
const PRODUCT = mongoose.model('product',productSchema)

module.exports = PRODUCT;
