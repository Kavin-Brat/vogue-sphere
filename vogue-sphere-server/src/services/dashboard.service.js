const { models } = require("../models/index");
var xlsx = require("xlsx");
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

const downloadProductFile = () => {
  var wb = xlsx.readFile(__dirname + "/SampleTR.xlsx");
  var ws = wb.Sheets["Transaction Reports"];

  // get worksheet data
  var data = xlsx.utils.sheet_to_json(ws);

  // Alter worksheet data
  let alteredData = data.map((record) => {
    record["Response Message"] = "Record Altered Succesfully";
    record["Comments"] = "Hey! Comment Added Succesfully";
    return record;
  });
  console.info("workbook", alteredData);
  // create a new empty workbook
  const newWB = xlsx.utils.book_new();
  // create a new worksheet with json
  const newWS = xlsx.utils.json_to_sheet(alteredData);
  // append workshhet with a name to the new workbook
  xlsx.utils.book_append_sheet(newWB, newWS, "Trans Details");
  // write and create a file
  xlsx.writeFile(newWB, "TRS.xlsx");
  return;
};

module.exports = {
  searchProduct,
  downloadProductFile,
};
