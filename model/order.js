const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    OrderItem : {
        type : String,
        required : true
    },
    ShippingAddress : {
        type : String,
        required : true
    },
    PaymentMethod : {
        type : String,
        required : true
    },
    PaymentResult : {
        type : String,
        enum : ['Pending','Confirmed','Declined',],
        default : 'Pending'
    }
});
const ORDER = mongoose.model('order',orderSchema)

module.exports = ORDER;
