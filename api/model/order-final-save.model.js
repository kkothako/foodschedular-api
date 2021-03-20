const mongoose  = require('mongoose');
const {Schema} = mongoose;

const orderFinalSaveModel = new Schema({
    id:String,
    cuisineID:String,
    cuisineName:String,
    protienID:String,
    protienName: String,
    scheduledDate: Date,
    profileId: String,
    userId: String,
    isCancelled: String,
    CancelledDeadlineDate: Date,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Order_Final_Save', orderFinalSaveModel);