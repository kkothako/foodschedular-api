const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true, limit: '50mb', parameterLimit: 100000
}));
app.use(bodyParser.json());

/****************** CORS ***********************************/
var corsOptions = {
    origin: [
        "http://sravaniglobal.com",
        "http://localhost:4200",
        "https://play.google.com",
        "http://schemas.android.com"
    ],
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

/****************** MongoDb Connection ***********************************/
const dev_db_url = 'mongodb+srv://krishna:abc@testcluster0.l1cii.mongodb.net/test';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/****************** Router Init ***********************************/





/****************** Bootsrap Api ***********************************/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Api started on port#`, port);
});