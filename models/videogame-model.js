const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vgSchema = new Schema(
    {
    title: {type: String},
    genre: {type: String, enum: ["Action", "Sports", "Adventure", "RPG", "Racing", "Fighting", "Simulation"], required: true},
    platform: {type: String, enum: ["Playstation5", "Playstation4", "XBOXOne", "XBOX Series S", "XBOX Series X", "Computer"], required: true},
    released: {type: Date,
        default: function() {
         const currentDate = new Date();
         currentDate.setFullYear(currentDate.getFullYear() + 1);
         console.log(currentDate)
        }, required: true},
    ESRB: {type: String, enum: ["eC", "E", "E+10", "T", "M", "Ao (Adults Only 18+)", "RP (Rating Pending)"], required: true},
    }
)
const Game = mongoose.model('Game', vgSchema);
module.exports = Game;