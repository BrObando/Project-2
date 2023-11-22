const Game = require('../models/videogame-model');

module.exports = {
    index,
    create,
    new: newGame,
    show, 
    update
}


async function index(req, res) {
    try {
        const allGames = await Game.find();
        res.render('videogames/index', { title: "All Games", games: allGames });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

async function create(req, res) {
    try {
        await Game.create(req.body);
        res.redirect('/videogames');
    } catch (err) {
        console.error(err);
        res.render('videogames/new', { title: "New Game", errorMsg: err.message });
    }
}

function newGame(req, res) {
    res.render('videogames/new', { title: "New Game", errorMsg: '' });
}

async function show(req, res) {
    try {
        const game = await Game.findById(req.params.id);
        res.render('videogames/show', { title: "Game Details", game });
    } catch (err) {
        console.error(err);
        res.status(404).render('404', { title: 'Not Found' });
    }
}

async function update(req, res) {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/videogames/${updatedGame._id}`);
    } catch (err) {
        console.error(err);
        res.status(404).render('404', { title: 'Not Found' });
    }
}
