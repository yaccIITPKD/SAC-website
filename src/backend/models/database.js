const { Sequelize } = require("sequelize");
// authentication replace database by name of database  , and password by your postgres password
const sequelize = new Sequelize("sac-website", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});
module.exports = { sequelize };
