const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./Database.js') ;
const {Council} =  require('./Council.js') ;
const {Base_profile} =  require('./Base_profile.js') ;

Club = sequelize.define('Club', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    base_profile_id :{
        type :DataTypes.INTEGER ,
        allowNull : false ,
        

    },
    description :{
        type :DataTypes.STRING ,    
    },
    budget :{
        type :DataTypes.INTEGER ,
        allowNull : false 
    },
    Council  :{
        type :DataTypes.STRING ,
    }

});

Club.belongsTo(Base_profile, { foreignKey: 'id' });
Club.belongsTo(Council, { foreignKey: 'name' });
Council.hasMany(Club, { foreignKey: 'name' });

module.exports = {Club };