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
  if (req.body.email === undefined || null) {
    errorResponse.code = ResponseCodes.INVALID_REQUEST_BODY;
    errorResponse.message = "Email is required";
    return sendErrorResponse(res, errorResponse);
  }

  if (!validator.isEmail(req.body.email)) {
    errorResponse.code = ResponseCodes.INVALID_REQUEST_BODY;
    errorResponse.message = "Email is not valid";
    return sendErrorResponse(res, errorResponse);
  }

  next();
};

module.exports = {
  contrakuSignupValidation,
};
