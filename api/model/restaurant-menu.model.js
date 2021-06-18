const mongoose  = require('mongoose');
const { schema } = require('./restaurant.model');
const {Schema} = mongoose;

const restaurantMenuModel = new Schema({
    MenuID:String,
    MenuName:String,
    RestaurantID:String,
    ProteinID:String,
    SpecialInstructions:String,
    Allergy:String,
    Ingredients:String,
    Price: {type: Number},
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String,
    timings:[{type: Schema.Types.ObjectId, ref:'Restaurant_Timings'}]
});


module.exports = mongoose.model('Restaurant_Menu', restaurantMenuModel);