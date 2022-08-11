const Sequelize = require("sequelize");
const db = require("../config/database");
const studentClass = require("../models/student_classes");

const model = db.define(
  "classes",
  {
    name: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
    },
    subject_id:
      {
        type: Sequelize.INTEGER,
      } | null,
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
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  }
);
// model.hasOne(stcc, { foreignKey: "Class_name" });
model.associate = (models) => {
  model.hasOne(stcc, { foreignKey: "name" });
};
module.exports = model;
