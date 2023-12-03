const { models } = require("../models/index");
const { UserModel } = models;
const Sequelize = require("sequelize");
const { Op } = Sequelize;

// user login service
const userLogin = async (req) => {
  console.log("req-body-info", req.body);
  const user = await UserModel.findOne({
    where: {
      email: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("email")), {
        [Op.iLike]: `%${req.body.email.toLowerCase()}%`,
      }),
      password: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("password")), {
        [Op.iLike]: `%${req.body.password.toLowerCase()}%`,
      }),
    },
  });
  return user ? user : { message: "Invalid User!" };
};

module.exports = {
  userLogin,
};
