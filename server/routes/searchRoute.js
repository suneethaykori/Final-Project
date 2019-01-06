let express =  require("express");
const router = express.Router();
let {list} = require( "../controllers/SearchController");


router.get("/search/:zip", list);
// router.post("/search", create);
//router.put("/comments/:id", update);
//router.delete("/comments/:id", remove);

module.exports =  router;