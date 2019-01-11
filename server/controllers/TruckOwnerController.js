let truckModel = require("../models/TruckOwnerModel");


module.exports.show =  function show(req, res) {
    truckModel.find({"email":req.param.email}).exec()
    .then(com => {
        return res.json(com);
    });
}

module.exports.create =  function create(request, response) {
    const newTruckOwner= new truckModel();

    newTruckOwner.fname = request.body.fname;
    newTruckOwner.lname = request.body.lname;
    newTruckOwner.email = request.body.email;
    newTruckOwner.phone = request.body.phone;
    newTruckOwner.password = request.body.password;
    newTruckOwner.truckmodel = request.body.truckmodel;
    newTruckOwner.truckmake = request.body.truckmake;
    newTruckOwner.costperhour = request.body.costperhour;
    newTruckOwner.zipcode = request.body.zipcode;

    newTruckOwner.save().then(savedTruckOwner => {
        console.log(savedTruckOwner);
        return response.json(savedTruckOwner)
      });
}



   