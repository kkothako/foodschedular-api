const mongoose  = require('mongoose');
const {Schema} = mongoose;

const orderConfirmModel = new Schema({
    id:String,
    cuisineID:String,
    cuisineName:String,
    protienID:String,
    protienName: String,
    scheduledDate: Date,
    profileId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Profile' },
    userId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    isCancelled: String,
    cancelledDeadlineDate: Date,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Order_Confirm', orderConfirmModel);