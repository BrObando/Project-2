const Blog = require("../models/blog-model");

module.exports = {
  blogIndex,
  newBlog,
  createBlog,
  showBlog,
};

async function blogIndex(req, res) {
  try {
    const allBlogs = await Blog.find();
    res.render("blogs/index", { title: "All Blog Posts", blogs: allBlogs });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

function newBlog(req, res) {
  res.render("blogs/new", { title: "New Blog", errorMsg: "" });
}

async function createBlog(req, res) {
  try {
    const { title, author, content, createdAt } = req.body;
    await Blog.create({ title, author, content, createdAt });
    res.redirect("/blogs/index");
  } catch (err) {
    console.error(err);
    res.render("blogs/new", { title: "New Blog", errorMsg: err.message });
  }
}

async function showBlog(req, res) {
  try {
    const blog = await Blog.findById(req.params.blogId);
    res.render("blogs/show", { blog });
  } catch (err) {
    console.error(err);
    res.status(404).render("404", { title: "Not Found" });
  }
}
