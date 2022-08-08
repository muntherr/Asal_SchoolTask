const Sequelize = require("sequelize");
const db = require("../config/database");
const model = db.define("student", {
  student_id: {
    type: Sequelize.INTEGER,
  },
  course_id: {
    type: Sequelize.INTEGER,
  },
  student_name: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.INTEGER,
  },
  dob: {
    type: Sequelize.INTEGER,
  },
  subject_name: {
    type: Sequelize.INTEGER,
  },
});
