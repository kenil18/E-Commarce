const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    ProductName : {
        type : String,
        required : true
    },
    Rating : {
        type : String,
        required : true
    },
    Comment : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});
const REVIEW = mongoose.model('review',reviewSchema)

module.exports = REVIEW;
