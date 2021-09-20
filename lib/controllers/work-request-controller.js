const { responseGenerator } = require("../utils/generators/resonse-generator");
const { StatusCodes } = require("http-status-codes");
const workrequestService = require("../services/work-request-service");

const makeRequest = async (req, res) => {
  try {
    let response = await workrequestService.makeRequest(req);
    return res.status(response.status).send(response);
  } catch (e) {
    console.log(e);
    return res.status(500).send({});
  }
};

module.exports = {makeRequest}
