
const Game = require('../models/videogame-model');
// const Review = require('../models/videogame-model');


module.exports = {
  newReview,
  createReview,
  showReview,
};

async function newReview(req, res) {
  try{
  const game = await Game.findById(req.params.id);
  res.render('reviews/new', { title: "Add Game Review", game,  gameId: req.params.id });
  } catch (err) {
    console.error(err);
}
}

async function createReview(req, res) {
  console.log(req.body)
  try {
    const game = await Game.findById(req.params.id);
    const review = {
      title: req.body.title,
      rating: req.body.rating,
      content: req.body.content,
      game: game._id,
    };
    // await review.save();
console.log(review)
   
    game.reviews.push(review);
    console.log(game)
    await game.save();

    res.redirect(`/videogames/${req.params.id}`);
  } catch (err) {
    console.error(err); 
  }
}

async function showReview(req, res) {
  try {
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    const game = await Game.findById(gameId);

    if (!game) {
      return res.status(404).send('Game not found');
    }
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).send('Review not found');
    }

    res.render('reviews/show', { title: 'Review Details', game, review });
  } catch (err) {
    console.error(err);
  }
}