const WorkSite = require("../model/WorkSite");
const responseCodes = require("../utils/constants/response-codes");
const { responseGenerator } = require("../utils/generators/resonse-generator");

const createWorkSite = async (req) => {
  try {
    let contrakuId = req.user.data._id;
    let siteLocation = req.body.siteLocation;
    let workStartDate = req.body.workStartDate;
    let workEndDate = req.body.workEndDate;
    let siteImageUrl = req.body.siteImageUrl;
    let siteLatitude = req.body.siteLatitude;
    let siteLongitude = req.body.siteLongitude;

    let workSite = new WorkSite({
      contrakuId,
      siteLocation,
      workStartDate,
      workEndDate,
      siteImageUrl,
      siteLatitude,
      siteLongitude
    });
    await workSite.save();
    return responseGenerator(responseCodes.SUCCESS, workSite);
  } catch (e) {
    throw e;
  }
};

module.exports = { createWorkSite };
