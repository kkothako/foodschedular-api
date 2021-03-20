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
        "http://schemas.android.com",
        "https://foodschedular.herokuapp.com"
    ],
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

/****************** MongoDb Connection ***********************************/
const dev_db_url = 'mongodb+srv://krishna:abc@foodscheduler.ziik3.mongodb.net/FSDev';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/****************** Router Initialise ***********************************/

//********************User Account Registration*************** */

const userAccountRouter = require('./api/router/user-account-registration.router');
app.use('/api', userAccountRouter)


//********************Create Preferences*************** */
const preferencesRouter = require('./api/router/preferences.router');
app.use('/api', preferencesRouter);

//********************Create Profile*************** */
const profileRouter = require('./api/router/profile.router');
app.use('/api', profileRouter);

//********************Email*************** */
const emailRouter = require('./api/router/email.router');
app.use('/api', emailRouter);

//********************User Profile*************** */
const userProfileRouter = require('./api/router/user-profile.router');
app.use('/api', userProfileRouter);

//********************Restaurant Cuisine*************** */
const restaurantCuisineRouter = require('./api/router/restaurant-cuisine.router');
app.use('/api', restaurantCuisineRouter);

//********************Restaurants*************** */
const restaurantRouter = require('./api/router/restaurant.router');
app.use('/api', restaurantRouter);

//********************Restaurant Timings*************** */
const restaurantTimingsRouter = require('./api/router/restaurant-timings.router');
app.use('/api', restaurantTimingsRouter);

//********************Restaurant Menu*************** */
const restaurantMenuRouter = require('./api/router/restaurant-menu.router');
app.use('/api', restaurantMenuRouter);

//********************Restaurant Menu Protien*************** */
const restaurantProtienRouter = require('./api/router/restaurant-menu-protien.router');
app.use('/api', restaurantProtienRouter);

//********************Order Save*************** */
const orderDraftRouter = require('./api/router/order-draft.router');
app.use('/api', orderDraftRouter);

//********************Order Final Save*************** */
const ordersRouter = require('./api/router/orders.router');
app.use('/api', ordersRouter);


/****************** Bootsrap Api ***********************************/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Api started on port#`, port);
});