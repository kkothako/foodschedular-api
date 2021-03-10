const mongoose  = require('mongoose');
const {Schema} = mongoose;

const restaurantMenuModel = new Schema({
    MenuID:String,
    MenuName:String,
    RestaurantID:String,
    ProtienID:String,
    SpecialInstructions:String,
    Allergy:String,
    Ingredients:String,
    Price: {type: Number},
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Restaurant_Menu', restaurantMenuModel);