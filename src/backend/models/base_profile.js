const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;


base_profile = sequelize.define('base_profile ', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    username :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique : true
    },
    password :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    email  :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique :true
    }

});

module.exports = {base_profile};
