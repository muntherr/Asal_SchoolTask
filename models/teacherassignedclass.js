const Sequelize = require("sequelize");
const db = require("../config/database");
const teacher = require("../models/teacher");
const classes = require("../models/class");

const model = db.define(
  "teacherassignedclass",
  {
    teacher_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    class_id: {
      type: Sequelize.STRING,
    },
  },

  {
    timestamps: false,
    tableName: "teacherassignedclass",
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    freezeTableName: true,
  }
);

teacher.associate = (model) => {
  teacher.belongsTo(model, { foreignKey: "teacher_id" });
};
// Classes.belongsTo(model, { foreignKey: "name" });

classes.associate = (model) => {
  classes.belongsTo(model, { foreignKey: "teacher_id" });
};
module.exports = model;
