const mongoose  = require('mongoose');
const {Schema} = mongoose;

const allergyModel = new Schema({
    allergyID:String,
    allergyName:String,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Allergy', allergyModel);