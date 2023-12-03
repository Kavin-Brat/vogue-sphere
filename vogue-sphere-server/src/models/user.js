const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    name: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false,
    },
    email: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false,
    },
    password: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
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
    dail_code: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dail_code",
      autoIncrement: false,
    },
    mobile_no: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "mobile_no",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "user",
    comment: "",
    indexes: [],
    timestamps: false
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
};
