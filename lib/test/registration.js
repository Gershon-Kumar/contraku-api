var request = require("supertest");
var should = require("chai").should();

const registrationTests = (app) => {
  describe("Running registration tests .........", () => {
    it("should create a new contraku", (done) => {
      request(app)
        .post("/api/registration/contraku-signup")
        .send({
          phone: "8973926526",
          password: "password",
          name: "name",
        })
        .expect((res) => {
          res.body.status.should.equal(200);
        })
        .end(done);
    });

    it("should be able to login", (done) => {
      request(app)
        .post("/api/registration/login")
        .send({
          phone: "8973926526",
          password: "password",
        })
        .expect((res) => {
          process.env.CONTRAKU_AUTH_TOKEN = res.body.data.token;
          res.body.status.should.equal(200);
        })
        .end(done);
    });
  });
};
module.exports = registrationTests;
