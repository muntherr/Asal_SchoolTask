const Sequelize = require("sequelize");
const db = require("../config/database");
const stc = require("../models/student_classes"); // import student class module
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

model.associate = (model) => {
  model.hasOne(stc, { foreignKey: "student_id" });
};
module.exports = model;
