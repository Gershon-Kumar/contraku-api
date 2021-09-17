const jwt = require("jsonwebtoken");
const commonConstants = require("../constants/common-constants");

let jwtExpiryTime = commonConstants.JWT_EXPIRY_TIME;
let jwtSecretKey = commonConstants.JWT_SECRET_KEY;

generateJwtToken = (user) => {
  try {
    data = {
      _id : user._id,
      phone: user.phone,
      name: user.name,
      role: user.role,
    };
    let token = jwt.sign(
      {
        exp: jwtExpiryTime,
        data: data,
      },
      jwtSecretKey
    );

    return token;
  } catch (e) {
    throw e;
  }
};

module.exports = generateJwtToken;
