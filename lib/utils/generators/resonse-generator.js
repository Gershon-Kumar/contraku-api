responseGenerator = (res, message, code, httpStatus, object) => {
  res.status(httpStatus).send({
    message: message,
    code: code,
    object: object,
  });
};

module.exports = { responseGenerator };
