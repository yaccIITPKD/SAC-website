const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {user} =  require('./user.js') ;

council  = sequelize.define('council', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique : true 
    },
    budget:{
        type :DataTypes.INTEGER ,
        allowNull : false ,
    },
    secretary :{
        type :DataTypes.INTEGER ,
        
    },
});

council.belongsTo(user, { foreignKey: 'secretary' });
user.hasOne(council, { foreignKey: 'secretary' });

module.exports = {council};
