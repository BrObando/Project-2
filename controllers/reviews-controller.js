
const Game = require('../models/videogame-model');
// const Review = require('../models/videogame-model');


module.exports = {
  newReview,
  createReview,
  showReview,
  deleteReview,
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
  // console.log(req.body)
  try {
    const game = await Game.findById(req.params.id);
    const review = {
      title: req.body.title,
      rating: req.body.rating,
      content: req.body.content,
      game: game._id,
      user: req.user,
      userAvatar: req.user.avatar, 
      username: req.user.name
    };


console.log("body",req.body)
console.log("user",req.user)
   
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
      return res.status(404).send('nope');
    }
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).send('Review not found');
    }
    const userIsReviewOwner = req.isAuthenticated() && req.user.equals(review.user);
    res.render('reviews/show', { title: 'Review Details', game, review, userIsReviewOwner });
  } catch (err) {
    console.error(err);
  }
}

async function deleteReview(req, res) {
  try {
    
    const reviewId = req.params.reviewId;



    const game = await Game.findOne({"reviews._id": reviewId})
    game.reviews.remove(reviewId)
    await game.save() 
   

    res.redirect(`/videogames/${game._id}`);
  } catch (err) {
    console.error(err);
  }
}