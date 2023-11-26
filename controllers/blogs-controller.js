const Blog = require('../models/blog-model');

module.exports = {
    newBlog,
    createBlog,
    showBlog,
};

function newBlog(req, res) {
    res.render('blogs/new');
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
