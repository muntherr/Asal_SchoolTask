const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define(
  "subject",
  {
    subject_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
    },
    subject_name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "subject",
  }
);
module.exports = model;
