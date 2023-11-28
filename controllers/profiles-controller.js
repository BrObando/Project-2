const Profile = require('../models/profile');


module.exports = {
    updateProfile,
  };


async function updateProfile(req, res) {

      try {
        const userId = req.user._id;
        const profileId = req.params.id;
        const {status} = req.body; 
      
  await Profile.findByIdAndUpdate(profileId, status, {new: true} )
      
  // res.render('v', { title: "Game Details", game });
//  await profile.save();
  
      
    } catch (error) {
      console.error(err);
      
    }
}

// async function editProfile(req.res){

// }