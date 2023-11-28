const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},//delete
    status: String
  }, {
    timestamps: true
  });
//fav game field // current game in profile update 
module.exports = mongoose.model('User', userSchema);

