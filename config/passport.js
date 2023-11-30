const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const Profile = require('../models/profile');

passport.use(new GoogleStrategy(
    // Configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    // The verify callback function...
    // Marking a function as an async function allows us
    // to consume promises using the await keyword
    async function(accessToken, refreshToken, profile, cb) {
      // When using async/await  we use a
      // try/catch block to handle an error
      try {
        // A user has logged in with OAuth...
        let user = await User.findOne({ googleId: profile.id });
        // Existing user found, so provide it to passport

      
        if (user) return cb(null, user);

        const newProfile = new Profile({
          username: profile.displayName, 
          status: 'Currently playing ...',
        })

        // We have a new user via OAuth!
        const newUser = new User ({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value, 
          profile: newProfile._id
        });

        // profile = await Profile.create({ // this is coming from profile model 
        //   // username: user.name,
        //   user: user.id, // this comes from user above 
        // });
        // user.profile = profile._id
        await newProfile.save()
        await newUser.save() //allows user to create a profile automatically 
        
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  ));

  passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });

  passport.deserializeUser(async function(userId, cb) {
    // It's nice to be able to use await in-line!
    cb(null, await User.findById(userId));
  });