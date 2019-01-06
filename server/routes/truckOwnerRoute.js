let express =  require("express");
const router = express.Router();
let {show,create} = require( "../controllers/TruckOwnerController");


router.get("/truckowner/:id", show);
router.post("/truckowner", create);
//router.put("/comments/:id", update);
//router.delete("/comments/:id", remove);

module.exports =  router;