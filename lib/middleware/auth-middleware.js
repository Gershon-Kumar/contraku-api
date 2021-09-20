const jwt = require("jsonwebtoken");
const commonConstants = require("../utils/constants/common-constants");
const roleConstants = require("../utils/constants/role-constants");
const responseCodes = require("../utils/constants/response-codes");
const { responseGenerator } = require("../utils/generators/resonse-generator");

const contrakuAuth = (req, res, next) => {
  try {
    let authToken = req.headers["authorization"];

    if (!authToken) {
      let response = responseGenerator(responseCodes.NO_AUTH_TOKEN, {
        message: "auth token is required",
      });
      return res.status(response.status).send(response);
    }

    const decodedData = jwt.verify(authToken, commonConstants.JWT_SECRET_KEY);
    if (decodedData.data.role != roleConstants.CONTRAKU) {
      throw new Error();
    }

    req.user = decodedData;
    next();
  } catch (e) {
    let message = "Invalid Token";
    let response = responseGenerator(responseCodes.NO_AUTH_TOKEN, { message });
    return res.status(response.status).send(response);
  }
};

const employeeAuth = (req, res, next) => {
  try {
    let authToken = req.headers["authorization"];

    if (!authToken) {
      let response = responseGenerator(responseCodes.NO_AUTH_TOKEN, {
        message: "auth token is required",
      });
      return res.status(response.status).send(response);
    }

    const decodedData = jwt.verify(authToken, commonConstants.JWT_SECRET_KEY);
    if (decodedData.data.role != roleConstants.EMPLOYEE) {
			console.log(decodedData)
      throw new Error();
    }

    req.user = decodedData;
    next();
  } catch (e) {
    let message = "Invalid Token";
    let response = responseGenerator(responseCodes.NO_AUTH_TOKEN, { message });
    return res.status(response.status).send(response);
  }
};

module.exports = { contrakuAuth, employeeAuth };
