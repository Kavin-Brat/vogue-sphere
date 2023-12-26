const Sequelize = require("sequelize");
const user = require("./user");
const product = require("./product");
const productType = require("./productType");

// Postgres Url format : postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName
const configSequelize = new Sequelize("postgres://postgres:Kavin@66O@127.0.0.1:5432/vogue-sphere", {
  dialect: "postgres",
  ssl: false,
});

const models = {
  UserModel: user(configSequelize, Sequelize),
  ProductModel: product(configSequelize, Sequelize),
  ProductTypeModel: productType(configSequelize, Sequelize),
};

module.exports = {
  configSequelize,
  models,
};
