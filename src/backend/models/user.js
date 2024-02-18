const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {base_profile} =  require('./base_profile.js') ;

user  =  sequelize.define('user', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    base_profile_id   :{
        type :DataTypes.INTEGER ,
        allowNull : false ,
       
    },
    joining_year  :{
        type :DataTypes.INTEGER ,
        allowNull : false 
    },
    program :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    branch :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    roll_no :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique : true 
    },
    role :{
        type :DataTypes.STRING ,
        allowNull : false 
    }
});

base_profile.hasOne(user, { foreignKey: 'base_profile_id' });
user.belongsTo(base_profile, { foreignKey: 'base_profile_id' });

module.exports = {user};