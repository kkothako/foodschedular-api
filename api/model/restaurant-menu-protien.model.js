const mongoose  = require('mongoose');
const {Schema} = mongoose;

const restaurantProtienModel = new Schema({
    protienID:String,
    protienName:String,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Restaurant_Menu_Protiens', restaurantProtienModel);