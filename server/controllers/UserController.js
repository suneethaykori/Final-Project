let UserModel = require("../models/UserModel");

module.exports.show =  function show(req, res) {
    UserModel.find({email:req.params.email}).exec()
    .then(user => {
        return res.json(user);
    });
}

module.exports.create =  function create(request, response) {
    const newUser= new UserModel();

    newUser.fname = request.body.fname;
    newUser.lname = request.body.lname;
    newUser.email = request.body.email;
    newUser.phone = request.body.phone;
    newUser.password = request.body.password;
    newUser.save().then(savedUser => {
        console.log(savedUser);
        return response.json(savedUser);
      });
}
   