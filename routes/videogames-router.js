const express = require("express");
const router = express.Router();

const videogamesCtrl = require("../controllers/videogames-controller");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", videogamesCtrl.index);
router.get("/new", ensureLoggedIn, videogamesCtrl.new);

router.post("/", ensureLoggedIn, videogamesCtrl.create);
router.get("/:id", videogamesCtrl.show);
module.exports = router;
