const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: String,
  name: String,
  bio: String,
});

module.exports = mongoose.model("User", userSchema);
