const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
   
    UserName : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true
    }
});
const ADMIN = mongoose.model('admin',adminSchema)

module.exports = ADMIN;
