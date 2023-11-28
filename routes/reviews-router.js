const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews-controller');

const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/videogames/:id/reviews/new', ensureLoggedIn, reviewCtrl.newReview);
router.post('/videogames/:id/reviews', ensureLoggedIn, reviewCtrl.createReview);
router.get('/videogames/:id/reviews/:reviewId', reviewCtrl.showReview);
router.delete('/:reviewId', ensureLoggedIn, reviewCtrl.deleteReview); //delete***



module.exports = router;
