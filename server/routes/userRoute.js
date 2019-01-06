let express =  require("express");
const router = express.Router();
let {show,create} = require( "../controllers/UserController");


router.get("/user/:id", show);
router.post("/user", create);
//router.put("/comments/:id", update);
//router.delete("/comments/:id", remove);

module.exports =  router;