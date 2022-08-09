const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define(
  "classes",
  {
    class_name: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
    },
    subject_id: {
      type: Sequelize.INTEGER,
    },
    teacher_id: {
      type: Sequelize.INTEGER,
    },
    date_from: {
      type: Sequelize.DATE,
    },
    date_to: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "classes",
  }
);
module.exports = model;
