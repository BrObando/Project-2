const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
