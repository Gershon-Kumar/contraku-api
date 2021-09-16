const express = require("express");
const app = express();
const route = require("../routes/index");

require("dotenv").config();
require("./db");
require("../middleware/setup-middleware")(app);

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api", route);

app.listen(process.env.PORT, () => {
  console.log(`🔥 Server started at : ${process.env.PORT}`);
});

module.exports = app;
