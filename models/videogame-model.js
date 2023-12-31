const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    title: { type: String, required: true },
    content: {
      type: String,
      required: true,
    },
    rating: { type: Number, min: 1, max: 5, required: true },
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const vgSchema = new Schema({
  title: { type: String },

  genre: {
    type: String,
    enum: [
      "Action",
      "Sports",
      "Adventure",
      "RPG",
      "Racing",
      "Fighting",
      "Shooter",
      "Simulation",
      "Party",
    ],
    required: true,
  },

  platform: { type: String, required: true },
  released: {
    type: Date,
    default: function () {
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() + 1);
      console.log(currentDate);
    },
    required: true,
  },
  ESRB: {
    type: String,
    enum: [
      "eC",
      "E",
      "E+10",
      "T",
      "M",
      "Ao (Adults Only 18+)",
      "RP (Rating Pending)",
    ],
    required: true,
  },
  imageUrl: { type: String },
  videoUrl: { type: String },
  reviews: [reviewSchema],
});
const Game = mongoose.model("Game", vgSchema);
module.exports = Game;
