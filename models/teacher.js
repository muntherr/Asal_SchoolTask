const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define(
  "teacher",
  {
    teacher_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
    },
    teacher_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    address: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "teacher",
  }
);
module.exports = model;
