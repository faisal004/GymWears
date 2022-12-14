const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    orderId: {type: String, required: true},
    //paytmInfo: {type: String, default: ''},
    products:[{
        product:{type:String},
        quantity:{type:Number,default:1}
    }],
    address:{type: String, required: true},
    amount:{type: Number, required: true},
    status:{type: String,default:'Pending', required: true},
},{timestamps:true});
mongoose.models={}

export default mongoose.model("Order",OrdersSchema)