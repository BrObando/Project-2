const router = require("express").Router();

const apiController = require("../controllers/news-api");

router.get("/news", apiController.index);

module.exports = router;
