let express =  require("express");
const router = express.Router();
let {list} = require( "../controllers/SearchController");


router.get("/search/:zip", list);

module.exports =  router;