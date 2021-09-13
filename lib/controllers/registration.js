const User = require("../model/User");
const {
  USER_ALREADY_EXISTS,
  SUCCESS,
} = require("../utils/constants/response-codes");
const { responseGenerator } = require("../utils/generators/resonse-generator");
const { StatusCodes } = require("http-status-codes");

contrakuSignup = async (req, res) => {
  try {
    let contrakuExists = checkIfContrakuExists(req.body.phone);
    if (contrakuExists) {
      return responseGenerator(res,"Contraku Exists",USER_ALREADY_EXISTS,StatusCodes.CONFLICT,null);
    }
    let user = new User({
      name: request.body.name,
      phone: request.body.phone,
      password: request.body.password,
    });
    await user.save();
    responseGenerator(res, "Success", SUCCESS, StatusCodes.OK, null);
  } catch (e) {
    res.status(500).send();
  }
};

checkIfContrakuExists = async (phone) => {
  let user = await User.find({phone : phone});
  if(user === undefined || user === null){
    return false;
  }
  return true;
};


module.exports = {
  contrakuSignup,
};
