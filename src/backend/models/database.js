const { Sequelize } = require("sequelize");
// authentication replace database by name of database  , and password by your postgres password

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true
    },
  },
});
module.exports = { sequelize };
