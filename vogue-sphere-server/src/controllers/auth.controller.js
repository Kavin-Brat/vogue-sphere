const { authService } = require("../services/index");

// user login controller
const login = async (req, res) => {
  try {
    const result = await authService.userLogin();
    const reponse = {};
    return result;
  } catch (error) {
    const result = {};
    const reponse = {};
    return result;
  }
};

module.exports = {
  login,
};
