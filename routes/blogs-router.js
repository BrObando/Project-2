const express = require('express');
const router = express.Router();

const blogCtrl = require('../controllers/blogs-controller');

router.get('/index', blogCtrl.blogIndex);
router.get('/new', blogCtrl.newBlog);

router.post('/', blogCtrl.createBlog);
router.get('/:blogId', blogCtrl.showBlog);

module.exports = router;