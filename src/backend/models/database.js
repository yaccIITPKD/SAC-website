const { Sequelize} = require('sequelize');
// authentication replace database by name of database  , and password by your postgres password
const sequelize = new Sequelize('data', 'postgres', 'Shiva#$098', {
    host: 'localhost',
    dialect:'postgres',
    port : 4000  //reoplace
});
module.exports = {sequelize}