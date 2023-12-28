const { models } = require("../models/index");
const { ProductModel, ProductTypeModel } = models;
const Sequelize = require("sequelize");
const { Op } = Sequelize;

// search dashboard product list
const searchProduct = async (req) => {
  if (!req.query.search) return { message: "Product name is required!" };
  let results = {};

  // To get the product details based on product name
  const product = await ProductModel.findOne({
    attributes: ["type_id", "name", "desc", "id"],
    where: {
      name: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("name")), {
        [Op.iLike]: `%${req.query.search.toLowerCase()}%`,
      }),
    },
  });

  if (!product) return { message: "Product not found!" };

  // product type id
  let productTypeId = product.dataValues.type_id;
  // To get the product type name from product id
  const productType = await ProductTypeModel.findOne({
    attributes: ["id", ["name", "type_name"]],
    where: {
      id: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("id")), {
        [Op.iLike]: `%${productTypeId.toLowerCase()}%`,
      }),
    },
  });
  console.log("productType", productType);
  let { type_id, name, desc, id } = product;
  results.type_id = type_id || "";
  results.name = name || "";
  results.desc = desc || "";
  results.id = id || "";
  results.type_name = productType ? productType.type_name : "";
  /* console.log(JSON.stringify(results, null, 4)); */

  return results;
};

module.exports = {
  searchProduct,
};
