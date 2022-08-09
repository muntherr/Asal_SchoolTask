const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define(
  "homeworks",
  {
    homework_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
    },
    student_id: {
      type: Sequelize.INTEGER,
    },
    grade: {
      type: Sequelize.FLOAT,
    },
    fromg: {
      type: Sequelize.INTEGER,
      default: 100,
    },
  },
  {
    timestamps: false,
    tableName: "homeworks",
  }
);
module.exports = model;
