const commonConstants = require("../utils/constants/common-constants");
const roleConstnts = require("../utils/constants/role-constants");
const User = require("../model/User");
const { responseGenerator } = require("../utils/generators/resonse-generator");
const responseCodes = require("../utils/constants/response-codes");
const generateJwtToken = require("../utils/jwt/jwt-util");
const { comparePassword } = require("../utils/security/hash-password");

let createNewContraku = async (req) => {
  try {
    let user = await createContrakuAndSaveToDb(req);
    let token = generateJwtToken(user);
    return responseGenerator(responseCodes.SUCCESS, { token, user });
  } catch (e) {
    throw e;
  }
};

let login = async (req, res) => {
  try {
    let phone = req.body.phone;
    let password = req.body.password;

    let user = await User.findOne({ phone });
    if (!user) {
      return responseGenerator(responseCodes.USER_NOT_FOUND, null);
    }

    let passwordMatch = comparePassword(password, user.password);
    if (!passwordMatch) {
      return responseGenerator(responseCodes.INVALID_PASSWORD, null);
    }

    let token = generateJwtToken(user);
    let response = {
      name: user.name,
      phone: user.phone,
      role: user.role,
      token: token,
    };
    return responseGenerator(responseCodes.SUCCESS, response);
  } catch (e) {
    throw e;
  }
};

async function createContrakuAndSaveToDb(req) {
  try {
    let user = new User({
      name: req.body.name,
      phone: req.body.phone,
      password: req.body.password,
			role : roleConstnts.CONTRAKU
    });
    await user.save();
    return { phone: user.phone, name: user.name, role: user.role };
  } catch (e) {
    throw e;
  }
}

module.exports = { createNewContraku, login };
