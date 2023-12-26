const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    type_id: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type_id",
      autoIncrement: false,
    },
    name: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false,
    },
    desc: {
      type: DataTypes.CHAR(250),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "desc",
      autoIncrement: false,
    },
    id: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "product",
    comment: "",
    indexes: [],
    timestamps: false,
  };
  const ProductModel = sequelize.define("product_model", attributes, options);
  return ProductModel;
};
