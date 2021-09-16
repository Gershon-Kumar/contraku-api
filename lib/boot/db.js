const mongoose = require("mongoose");

let mongoUrl = process.env.MONGO_URL;

if (process.env.ENV === "test") {
  mongoUrl = process.env.TEST_DB_URL;
}

console.log(mongoUrl)

let mongDb = mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("💻 connected to db"))
  .catch((e) => console.error(e));

module.exports = mongDb;
