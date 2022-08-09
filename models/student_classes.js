const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define(
  "course",
  {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
    },
    Class_name: {
      type: Sequelize.STRING,
      primaryKey: true,
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
    tableName: "course",
  }
);
module.exports = model;
