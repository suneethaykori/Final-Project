let express = require("express");
const bodyParser = require('body-parser');
let TruckOwnerRoutes  = require("./routes/truckOwnerRoute");
let UserRoutes  = require("./routes/userRoute");
//let SearchRoutes  = require("./routes/searchRoute");


let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://user1:password1@ds143132.mlab.com:43132/movemystuff");


const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(UserRoutes);
app.use(TruckOwnerRoutes);
//app.use(SearchRoutes);


// const users = require("./user");
// const truckowners = require("./truckowner");
// const searches = require("./search");

app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
     console.log("Web server is now living in apartment 3001");
 });