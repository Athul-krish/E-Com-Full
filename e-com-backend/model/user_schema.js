const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  userPhoneNumber: String,
  userEmail: String,
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
