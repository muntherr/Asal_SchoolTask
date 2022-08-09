const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define(
  "student",
  {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
    },
    student_name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    dob: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "student",
  }
);
module.exports = model;
