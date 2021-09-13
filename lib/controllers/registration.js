const { responseGenerator } = require("../utils/generators/resonse-generator");
const { StatusCodes } = require("http-status-codes");
const registrationService = require("../services/registration-service");

contrakuSignup = async (req, res) => {
  try {
    let response = await registrationService.createNewContraku(req, res);
    return res.status(response.status).send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = {
  contrakuSignup,
};
