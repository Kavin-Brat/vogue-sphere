const { dashboardService } = require("../services/index");
const helper = require("../utils/helper");

// user get product controller
const getProduct = async (req, res) => {
  try {
    const result = await dashboardService.searchProduct(req, res);
    const response = helper.successResponse(200, "Product Fetched Successfully!", result);
    return res.status(response.status).send(response);
  } catch (error) {
    const response = helper.errorResponse(500, "Internal Server Error!", error);
    return res.status(response.status).send(response);
  }
};

const downloadFile = async (req, res) => {
  try {
    const result = await dashboardService.downloadProductFile(req, res);
    const response = helper.successResponse(200, "Product File Downloaded Successfully!", result);
    return res.status(response.status).send(response);
  } catch (error) {
    const response = helper.errorResponse(500, "Internal Server Error!", error);
    return res.status(response.status).send(response);
  }
};

module.exports = {
  getProduct,
  downloadFile,
};
