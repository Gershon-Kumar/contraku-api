const app = require("../boot/app");
var mongoose = require("mongoose");

describe("Starting Tests ............", () => {
  after(() => {
    mongoose.connect(process.env.TEST_DB_URL, function () {
      mongoose.connection.db.dropDatabase();
    });
  });

  require("./registration")(app);
  require("./work-site-test")(app);
});
