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
});

module.exports =  mongoose.model("User", schema);
