const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profiles-controller');

router.post('/profile/:id/update', profileCtrl.updateProfile)
router.get('/profile/:id/edit', profileCtrl.editProfile)
module.exports = router;