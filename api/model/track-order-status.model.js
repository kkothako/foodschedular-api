const mongoose  = require('mongoose');
const {Schema} = mongoose;

const trackOrderStatusModel = new Schema({
    id:String,
    Status: String,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Track_Order_Status', trackOrderStatusModel);