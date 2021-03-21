const mongoose  = require('mongoose');
const {Schema} = mongoose;

const proteinModel = new Schema({
    proteinID:String,
    proteinName:String,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String,
    cuisineID: { type: mongoose.Types.ObjectId, ref: 'Cuisine' }
});


module.exports = mongoose.model('Protein', proteinModel);