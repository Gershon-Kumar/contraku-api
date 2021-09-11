const morgan = require("morgan");
const envConfig = require("../config/env");
const envConstants = require("../utils/constants/env-constants");

module.exports = (app) => {
  //logging
  if (envConfig.activeEnvironment == envConstants.DEV_ENV) {
    app.use(morgan("dev"));
  }

  if (envConfig.activeEnvironment == envConstants.STAGE_ENV) {
    app.use(morgan("common"));
  }

  if (envConfig.activeEnvironment == envConstants.PROD_ENV) {
    app.use(morgan("combined"));
  }
};
