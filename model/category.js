const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    CategoryType : {
        type : String,
        required : true
    },
    CategoryDescription : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
      }
});
const CATEGORY = mongoose.model('category',categorySchema)

module.exports = CATEGORY;
