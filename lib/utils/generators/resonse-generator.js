const { StatusCodes } = require("http-status-codes");

responseGenerator = (code, object) => {
  return {
    code: code,
    data: object,
    status: code === 200 ? StatusCodes.OK : StatusCodes.BAD_REQUEST,
  };
};

module.exports = { responseGenerator };
