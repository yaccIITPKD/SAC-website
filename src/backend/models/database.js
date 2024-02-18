const { Sequelize} = require('sequelize');
// authentication replace database by name of database  , and password by your postgres password
const sequelize = new Sequelize('database', 'postgres', 'password', {
    host: 'localhost',
    dialect:'postgres',
    port : 4000  //replace it by database port
});
module.exports = {sequelize}