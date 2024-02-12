const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('database', 'postgres', 'password', {
    host: 'localhost',
    dialect:'postgres',
    port : 4000 
});
module.exports = {sequelize}