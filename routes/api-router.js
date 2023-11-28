const router = require('express').Router()

const apiController = require('../controllers/news-api')

router.get('/news', apiController.index);

//router.get('/news/:id', apiController.show);

module.exports = router;