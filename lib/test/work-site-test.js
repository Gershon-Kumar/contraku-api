var request = require("supertest");
var should = require("chai").should();

const workSiteTest = (app) => {
  describe("Running work site tests......", () => {
    it("Should create a work site", (done) => {
      request(app)
        .post("/api/work-site/create")
        .send({
          siteLocation: "loacation",
          workStartDate:
            "Fri Dec 03 2021 14:46:08 GMT+0530 (India Standard Time)",
          workEndDate:
            "Sat Nov 27 2021 04:38:40 GMT+0530 (India Standard Time)",
          siteImageUrl: "http://placeimg.com/640/480",
          siteLatitude: "-13.3567",
          siteLongitude: "-178.4666",
        })
        .set("Authorization", process.env.CONTRAKU_AUTH_TOKEN)
        .expect((res) => {
          res.status.should.equal(200);
        })
        .end(done);
    });

    it("should list all work sites by a contraku", (done) => {
      request(app)
        .get("/api/work-site/list")
        .set("Authorization", process.env.CONTRAKU_AUTH_TOKEN)
        .send()
        .expect((res) => res.status.should.equal(200))
        .end(done);
    });
  });
};

module.exports = workSiteTest;
