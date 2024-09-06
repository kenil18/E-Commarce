const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    BrandName : {
        type : String,
        required : true
    },
    BrandDescription : {
        type : String,
        required : true
    },
    MenuFactoringAddress : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
      }
});
const BRAND = mongoose.model('brand',brandSchema)

module.exports = BRAND;
