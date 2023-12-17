const { models } = require("../models/index");
const { SECRET_KEY } = require("../constants/constants");
const { UserModel } = models;
const Sequelize = require("sequelize");
const { generateUniqueId } = require("../utils/stringUtils");
const { Op } = Sequelize;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const helper = require("../utils/helper");

// user login service
const userLogin = async (req) => {
  const user = await UserModel.findOne({
    attributes: ["name", "email", "password", "dail_code", "mobile_no"],
    where: {
      email: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("email")), {
        [Op.iLike]: `%${req.body.email.toLowerCase()}%`,
      }),
      /*       password: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("password")), {
        [Op.iLike]: `%${req.body.password.toLowerCase()}%`,
      }), */
    },
  });

  // Compare and checking the user password with hashed password
  let isPasswordCorrect = await bcrypt.compare(req.body.password?.toLowerCase(), user.password);
  if (!isPasswordCorrect) return { message: "Invalid User!" };

  // creating JWT token with user creds
  const accessToken = jwt.sign(
    {
      name: user.name,
      email: user.email,
    },
    SECRET_KEY
  );
  let token = { access_token: accessToken, refresh_token: "" };
  user.dataValues.token = token;
  // Limiting the password in returning the responses
  delete user.dataValues.password;

  return user ? user : { message: "Invalid User!" };
};

// register new user service
const registerNewUser = async (req) => {
  if (!req.body.name) return { message: "name required!" };
  if (!req.body.email) return { message: "email required!" };
  if (!req.body.password) return { message: "password required!" };
  if (!req.body.dail_code) return { message: "dail_code required!" };
  if (!req.body.mobile_no) return { message: "mobile_no required!" };

  // Hashing password
  let newPassword = await bcrypt.hash(req.body.password, 10);

  // Check if user already exist
  const user = await UserModel.findOne({
    attributes: ["email"],
    where: {
      email: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("email")), {
        [Op.iLike]: `%${req.body.email.toLowerCase()}%`,
      }),
    },
  });
  // throwing error if user already exist.
  if (user) return { message: "Email already exist!" };

  // to generate unique user id
  const uniqueId = generateUniqueId(`${req.body.name}${req.body.email}`);

  const createUser = await UserModel.create({
    name: req.body.name,
    email: req.body.email,
    password: newPassword,
    dail_code: req.body.dail_code,
    mobile_no: req.body.mobile_no,
    id: uniqueId,
  });

  return createUser ? null : { message: "Invalid User!" };
};

module.exports = {
  userLogin,
  registerNewUser,
};
