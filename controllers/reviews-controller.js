
const Game = require('../models/videogame-model');
const Review = require('../models/videogame-model');


module.exports = {
   newReview,
  createReview,
  showReview,
};

function newReview(req, res) {
  res.render('reviews/new', { gameId: req.params.id });
}

async function createReview(req, res) {
  try {
    const game = await Game.findById(req.params.id);
    const review = new Review({
      title: req.body.title,
      rating: req.body.rating,
      content: req.body.content,
      game: game._id,
    });
    await review.save();

   
    game.reviews.push(review);
    await game.save();

    res.redirect(`/videogames/${req.params.id}`);
  } catch (err) {
    console.error(err); 
  }
}

async function showReview(req, res) {
  try {
    const review = await Review.findById(req.params.reviewId);
    res.render('reviews/show', { review });
  } catch (err) {
    console.error(err);
  }
}
