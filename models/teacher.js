const Sequelize = require("sequelize");
const db = require("../config/database");
const classes = require("../models/class");

const teacherAssignedClass = require("../models/teacherassignedclass");
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
      allowNull: true,
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
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  }
);

model.associate = (model) => {
  model.hasOne(teacherAssignedClass, { foreignKey: "teacher_id" });
};

model.associate = (model) => {
  model.hasOne(classes, { foreignKey: "teacher_id" });
};

module.exports = model;
