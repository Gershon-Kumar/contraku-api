var request = require("supertest");
const app = require("../boot/app");
var should = require('chai').should();

const registrationTests = describe("Running registration tests .........", () => {

  it("should create a new contraku", (done) => {
    request(app)
      .post("/api/registration/contraku-signup")
      .send({
        phone: "8973926526",
        password: "password",
        name: "name",
      })
      .expect((res) => {
        console.log(res.body);
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
      .expect((res) => res.body.status.should.equal(200))
      .end(done);
  });
});

module.exports = registrationTests;