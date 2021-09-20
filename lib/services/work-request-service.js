const WorkRequest = require("../model/WorkRequest");
const WorkSite = require("../model/WorkSite");
const responseCodes = require("../utils/constants/response-codes");
const { responseGenerator } = require("../utils/generators/resonse-generator");

const makeRequest = async (req) => {
  try {
    const body = req.body;
    const user = req.user.data;

    let workSite = await WorkSite.findOne({ workSiteId: body.workSiteId });
    let workRequest = {
      contrakuId: workSite.contrakuId,
      employeeId: user._id,
      workSiteId: workSite._id,
    };
    await new WorkRequest(workRequest).save();
    return responseGenerator(responseCodes.SUCCESS, workRequest);
  } catch (e) {
    throw e;
  }
};

module.exports = { makeRequest };
