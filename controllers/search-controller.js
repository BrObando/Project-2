const Game = require("../models/videogame-model");

async function searchGames(req, res) {
  try {
    const searchQuery = req.query.query;
    const searchResults = await Game.find({
      $or: [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { genre: { $regex: new RegExp(searchQuery, "i") } },
      ],
    });

    res.render("search-results", {
      searchResults,
      searchQuery,
      user: req.user,
    });
  } catch (error) {
    console.error(error);
    res.status(404).render("404", { title: "Not Found" });
  }
}

module.exports = {
  searchGames,
};
