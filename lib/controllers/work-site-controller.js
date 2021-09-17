const { responseGenerator } = require("../utils/generators/resonse-generator");
const { StatusCodes } = require("http-status-codes");
const workSiteService = require("../services/work-site-service");

const create = async (req, res) => {
  try {
    let response = await workSiteService.createWorkSite(req);
    return res.status(response.status).send(response);
  } catch (e) {
    console.log(e);
    return res.status(500).send({});
  }
};

module.exports = { create };
