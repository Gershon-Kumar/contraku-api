const commonConstants = require("../utils/constants/common-constants");
const User = require("../model/User");
const { responseGenerator } = require("../utils/generators/resonse-generator");
const responseCodes = require("../utils/constants/response-codes");

createNewContraku = async (req) => {
  try {
    let user = await createContrakuAndSaveToDb(req);
    return responseGenerator(responseCodes.SUCCESS, user);
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
    return user;
  } catch (e) {
    throw e;
  }
}

module.exports = { createNewContraku };
