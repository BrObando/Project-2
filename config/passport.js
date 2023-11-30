const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");
const Profile = require("../models/profile");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },

    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) return cb(null, user);

        const newProfile = new Profile({
          username: profile.displayName,
          status: "Currently playing ...",
        });

        const newUser = new User({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
          profile: newProfile._id,
        });

        await newProfile.save();
        await newUser.save();

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(async function (userId, cb) {
  cb(null, await User.findById(userId));
});
