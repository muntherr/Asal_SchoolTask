//Config the Connection settings
const Sequelize = require("sequelize");
module.exports = new Sequelize("Mon_School", "postgres", "7262", {
  host: "localhost",
  dialect: "postgres",
});
