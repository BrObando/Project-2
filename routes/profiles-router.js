const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profiles-controller');

const ensureLoggedIn = require('../config/ensureLoggedIn')

router.put('/:id/edit', ensureLoggedIn, profileCtrl.updateProfile); //
router.get('/edit', ensureLoggedIn, profileCtrl.editProfile)//route goes first - wsame structure
router.get('/:id/show', ensureLoggedIn, profileCtrl.showProfile);


module.exports = router;