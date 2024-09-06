const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName : {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required : true
    },
    UserName : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
});
const USER = mongoose.model('user',userSchema)

module.exports = USER;
