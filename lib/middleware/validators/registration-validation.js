const validator = require("validator");
const ResponseCodes = require("../../utils/constants/response-codes");

let errorResponse = {
  code: 400,
  message: "",
};

let sendErrorResponse = (res, errorObject) => {
  res.status(400).send(errorObject);
};

let contrakuSignupValidation = (req, res, next) => {
  if (req.body.phone === undefined || req.body.phone === null) {
    errorResponse.code = ResponseCodes.INVALID_REQUEST_BODY;
    errorResponse.message = "phone is required";
    return sendErrorResponse(res, errorResponse);
  }

  if (req.body.name === undefined || req.body.name === null) {
    errorResponse.code = ResponseCodes.INVALID_REQUEST_BODY;
    errorResponse.message = "name is required";
    return sendErrorResponse(res, errorResponse);
  }

  if (req.body.password === undefined || req.body.password.length < 6) {
    errorResponse.code = ResponseCodes.INVALID_REQUEST_BODY;
    errorResponse.message = "password should be more than 6 characters";
    return sendErrorResponse(res, errorResponse);
  }

  next();
};

module.exports = {
  contrakuSignupValidation,
};
