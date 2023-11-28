const Profile = require('../models/profile');


module.exports = {
    updateProfile,
    showProfile, 
  };


async function updateProfile(req, res) {

      try {
        const userId = req.user._id;
        const profileId = req.params.id;
        const {status} = req.body; 
      
  await Profile.findByIdAndUpdate(profileId, status, {new: true} ) // new tru - update // status - takes the info to update 
      
  res.render('profiles/update', { profile: updatedProfile });
  
      
    } catch (error) {
      console.error(err);
      
    }
}

async function showProfile(req, res) {
  try {
       const userId = req.user._id;
        const profileId = req.params.id;
        const {status} = req.body; 

    // if (!req.isAuthenticated()) {
    //   return res.redirect('/');
    // }
    const profile = await Profile.findById(profileId);

    res.render('profiles/show', { profile, showProfile });
  } catch (error) {
    console.error(err);
  }
}

// async function editProfile(req.res){

// }