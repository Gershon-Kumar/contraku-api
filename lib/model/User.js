const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const commonConstants = require("../utils/constants/common-constants");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: String,
  bio: String,
  role: String,
});

userSchema.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(commonConstants.PASSWORD_SALT_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = async (candidatePassword) => {
  try {
    await bcrypt.compare(candidatePassword, this.password);
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = mongoose.model("User", userSchema);
