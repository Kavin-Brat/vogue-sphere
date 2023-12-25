const { dashboardService } = require("../services/index");
const helper = require("../utils/helper");

// user login controller
const productSearch = async (req, res) => {
  try {
    const result = await dashboardService.searchProductList(req, res);
    const response = helper.successResponse(200, "Email Verified Successfully!", result);
    return res.status(response.status).send(response);
  } catch (error) {
    const response = helper.errorResponse(500, "Internal Server Error!", error);
    return res.status(response.status).send(response);
  }
};

module.exports = {
  productSearch,
};
