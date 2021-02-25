const mongoose  = require('mongoose');
const {Schema} = mongoose;

const emailModel = new Schema({
    to:String,
    bcc:String,
    subject:String,
    body:String
});


module.exports = mongoose.model('email', emailModel);
