let truckModel = require("../models/TruckOwnerModel");


module.exports.show =  function show(req, res) {
    truckModel.find({"email":req.param.email}).exec()
    .then(com => {
        return res.json(com);
    });
}

module.exports.create =  function create(request, response) {
    const newTruckOwner= new truckModel();

    newTruckOwner.body = request.body.body;
    newTruckOwner.save().then(savedUser => {
        console.log(savedUser);
      });
}
   