const express = require('express');
const router = express.Router();

const videogamesCtrl = require('../controllers/videogames-controller');

router.get('/', videogamesCtrl.index);
router.get('/new', videogamesCtrl.new);

router.post('/', videogamesCtrl.create);
router.get('/:id', videogamesCtrl.show);
module.exports = router;