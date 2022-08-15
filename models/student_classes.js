const Sequelize = require("sequelize");
const db = require("../config/database");
const Classes = require("../models/class");
const student = require("../models/student");

const model = db.define(
  "student_classes",
  {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
    },
    name: {
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
    tableName: "student_classes",
  }
);


Classes.associate = (model) => {
  Classes.belongsTo(model, { foreignKey: "name" });
};
// Classes.belongsTo(model, { foreignKey: "name" });

student.associate = (model) => {
  student.belongsTo(model, { foreignKey: "name" });
};

module.exports = model;
