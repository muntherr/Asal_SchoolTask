const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define(
  "teacherassignedcourse",
  {
    teacher_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    Class_ID: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
  },

  {
    timestamps: false,
    tableName: "teacherassignedcourse",
  }
);
module.exports = model;
