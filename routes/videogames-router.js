var express = require('express');
var router = express.Router();

const videogamesCtrl = require('../controllers/videogames-controller');

router.get('/', videogamesCtrl.index);
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/new', videogamesCtrl.new);
router.post('/', videogamesCtrl.create);

router.get('/:id', videogamesCtrl.show);

module.exports = router;



