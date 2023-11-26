const Blog = require('../models/blog-model');

module.exports = {
    blogIndex,
    newBlog,
    createBlog,
    showBlog,
};

async function blogIndex(req, res) {
    try {
        const allBlogs = await Blog.find();
        res.render('blogs/index', { title: "All Games", games: allGames });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

function newBlog(req, res) {
    res.render('blogs/new', {title: "New Blog", errorMsg: ''});
}

async function createBlog(req, res) {
    try {
        const newBlog = {
            author: req.body.author,
            content: req.body.content,
        };
        await Blog.create(newBlog);

        res.redirect('/blogs');
    } catch (err) {
        console.error(err);
    }
}

async function showBlog(req, res) {
    try {
        const blog = await Blog.findById(req.params.blogId).lean();

        if (!blog) {
            res.status(404).render('404', { title: 'Not Found' });
            return;
        }

        res.render('blogs/show', { blog });
    } catch (err) {
        console.error(err);
    }
}
