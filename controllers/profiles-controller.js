const Profile = require("../models/profile");
const User = require("../models/user");

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

    const user = await User.findByIdAndUpdate(profileId, status, {
      new: true,
    }).then((result) => console.log(result));

    res.redirect(`/profiles/${profileId}/show`);
  } catch (error) {
    console.error(error);
  }
}

async function showProfile(req, res) {
  try {
    res.render("profiles/show");
  } catch (error) {
    console.error(error);
  }
}

async function editProfile(req, res) {
  const profileId = req.params.id;

  try {
    const profile = await Profile.findById(profileId);
    res.render("profiles/edit", { profile, editProfile });
  } catch (err) {
    console.log(err);
  }
}
