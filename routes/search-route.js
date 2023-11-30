const express = require("express");
const router = express.Router();
const searchCtrl = require("../controllers/search-controller");

router.get("/", searchCtrl.searchGames);

module.exports = router;
