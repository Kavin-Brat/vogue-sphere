const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    id: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: false,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "product_type",
    comment: "",
    indexes: [],
    timestamps: false,
  };
  const ProductTypeModel = sequelize.define("product_type_model", attributes, options);
  return ProductTypeModel;
};
