const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    
    mainorder: {
        type: String
    },
    quantity: {
        type: Number
    }
    

}, { timestamps: true })

Order2 = mongoose.model('orderlist', OrderSchema);
 
module.exports = Order2;

