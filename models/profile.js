const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    username: { type: String, unique: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
