const { authService } = require("../services/index");
const helper = require("../utils/helper");

// user login controller
const login = async (req, res) => {
  try {
    const result = await authService.userLogin(req, res);
    const response = helper.successResponse(200, "Email Verified Successfully!", result);
    return res.status(response.status).send(response);
  } catch (error) {
    const response = helper.errorResponse(500, "Internal Server Error!", error);
    return res.status(response.status).send(response);
  }
};

// register user controller
const registerUser = async (req, res) => {
  try {
    const result = await authService.registerNewUser(req, res);
    const response = helper.successResponse(200, "User Created Successfully!", result);
    return res.status(response.status).send(response);
  } catch (error) {
    const response = helper.errorResponse(500, "Internal Server Error!", error);
    return res.status(response.status).send(response);
  }
};

module.exports = {
  login,
  registerUser,
};
