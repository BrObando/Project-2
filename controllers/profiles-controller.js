const Profile = require('../models/profile');
const User= require('../models/user');

module.exports = {
    updateProfile,
    showProfile, 
    editProfile,
  };


async function updateProfile(req, res) {

      try {
        const userId = req.user._id;
        const profileId = req.params.id;
        const status = req.body; 
      // console.log(status)
      // const trueUser = await User.findById(profileId)
      // console.log(trueUser)
      // const epicUser = await Profile.findOne({username: trueUser.name})
      // console.log(epicUser)
    const user = await User.findByIdAndUpdate(profileId, status, {new: true} ) 
  //  console.log(profileId)
  // await User.findByIdAndUpdate(userId, status, {new: true} )// new tru - update // status - takes the info to update 
  res.redirect(`/profiles/${profileId}`);
  // res.render('profiles/edit', { profile: updatedProfile });
  
      
    } catch (error) {
      console.error(error);
      
    }
}

async function showProfile(req, res) {
  try {
       
    res.render('profiles/show');
  } catch (error) {
    console.error(error);
  }
}



async function editProfile(req, res) {
  const profileId = req.params.id;

  // const {status} = req.body; 
  try {
      const profile = await Profile.findById(profileId)
      res.render('profiles/edit', { profile, editProfile });
      // await profile.save();
  }
  
  catch (err) {
      console.log(err)
  }
}