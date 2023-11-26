const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews-controller');



router.get('/videogames/:id/reviews/new', reviewCtrl.newReview);
router.post('/videogames/:id/reviews', reviewCtrl.createReview);
router.get('/videogames/:id/reviews/:reviewId', reviewCtrl.showReview);



module.exports = router;
