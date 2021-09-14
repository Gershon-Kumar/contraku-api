const commonConstants = require("../utils/constants/common-constants");
const User = require("../model/User");
const { responseGenerator } = require("../utils/generators/resonse-generator");
const responseCodes = require("../utils/constants/response-codes");
const generateJwtToken = require("../utils/jwt/jwt-util");

createNewContraku = async (req) => {
  try {
    let user = await createContrakuAndSaveToDb(req);
    let token = generateJwtToken(user);
    return responseGenerator(responseCodes.SUCCESS, { token, user });
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
      role: commonConstants.CONTRAKU_ROLE,
    });
    await user.save();
    return { phone: user.phone, name: user.name, role: user.role };
  } catch (e) {
    throw e;
  }
}

module.exports = { createNewContraku };
