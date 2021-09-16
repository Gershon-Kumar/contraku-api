const jwt = require("jsonwebtoken");
const commonConstants = require("../utils/constants/common-constants");
const responseCodes = require("../utils/constants/response-codes");
const { responseGenerator } = require("../utils/generators/resonse-generator");

const contrakuAuth = (req, res, next) => {
  try {
    let authToken = req.headers["Authorization"];

    if (!authToken) {
      let response = responseGenerator(responseCodes.NO_AUTH_TOKEN, {
        message: "auth token is required",
      });
      res.status(response.status).send(response);
    }

    const decodedData = jwt.decode(authToken, commonConstants.JWT_SECRET_KEY);
    req.user = decodedData;
    next();
  } catch (e) {
    let message = "Invalid Token";
    let response = responseGenerator(responseCodes.NO_AUTH_TOKEN, { message });
    res.status(response.status, response);
  }
};

module.exports = { contrakuAuth };