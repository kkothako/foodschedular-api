const mongoose = require('mongoose');
const restaurantMenuModel = require('../model/restaurant-menu.model');

exports.createrestaurantMenus = ((request, response) => {

    const locrestaurantMenuModel = new restaurantMenuModel(request.body);
    locrestaurantMenuModel.MenuID = new mongoose.Types.ObjectId;

    locrestaurantMenuModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

exports.getRestorentMenuByProteinIdAndRestorentId = ((request, response) => {

    restaurantMenuModel.findOne({
        RestaurantID: request.body.restaurantID,
        ProteinID: request.body.proteinID
    }, (error, menu) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: menu });
    });
});

exports.getAllRestorentMenusByRestorentIdAndProtienId = ((request, response) => {
console.log('***************',request.body.restorentId);
console.log( 'p',request.body.proteinId);
    restaurantMenuModel.findOne({ RestaurantID: request.body.restorentId, ProteinID: request.body.proteinId })
        .populate('timings')
        .exec((error, restorents) => {
            if (error) {
                return response.json({ status: false, error: error });
            }
            return response.json({ status: true, data: restorents });
        });

});
