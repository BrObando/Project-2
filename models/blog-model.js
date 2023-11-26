const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;