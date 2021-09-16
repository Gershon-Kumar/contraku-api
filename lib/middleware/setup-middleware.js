const morgan = require("morgan");

module.exports = (app) => {
  //logging
  if (process.env.ENV == 'dev') {
    app.use(morgan("dev"));
  }

  if (process.env.ENV == 'stage') {
    app.use(morgan("common"));
  }

  if (process.env.ENV == 'prod') {
    app.use(morgan("combined"));
  }
};
