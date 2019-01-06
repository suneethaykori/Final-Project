let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 fname: {
   required: true,
   type: String
 },
 lname: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  truckmake: {
    required: true,
    type: String
  },
  truckmodel: {
    required: true,
    type: String
  },
  costperhour: {
    required: true,
    type: String
  },
  zipcode: {
    required: true,
    type: String
  },
});

module.exports =  mongoose.model("TruckOwner", schema);