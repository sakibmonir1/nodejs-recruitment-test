const mongoose = require('mongoose');
const Order2 = require('./orderSchema');
const Schema = mongoose.Schema;
const OrderSchema = require('./orderSchema');

const orderlistSchema = new Schema({
    
    orderlistz: [{ type: Schema.Types.ObjectId, ref: 'orderlist' }],

    phoneno: {
        type: String
    }    

}, { timestamps: true })

const Ordermain = mongoose.model('order', orderlistSchema);
module.exports = Ordermain;