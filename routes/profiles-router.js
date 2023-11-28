const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profiles-controller');

const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/:id/edit', ensureLoggedIn, profileCtrl.updateProfile);
router.get('/:id/show', ensureLoggedIn, profileCtrl.showProfile);
router.get('/edit', ensureLoggedIn, profileCtrl.editProfile)

module.exports = router;