let truckModel = require("../models/TruckOwnerModel");


module.exports.list =  function list(req, res) {
    console.log("Zipcode is " + req.params.zip)
    truckModel.find({zipcode:req.params.zip}).exec()
    .then(trucksInZip => {
        console.log(trucksInZip);
        return res.json(trucksInZip);
    });
}
