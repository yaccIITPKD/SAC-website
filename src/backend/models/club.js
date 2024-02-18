const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {council} =  require('./council.js') ;
const {base_profile} =  require('./base_profile.js') ;

club = sequelize.define('club', {
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

club.belongsTo(base_profile, { foreignKey: 'id' });
club.belongsTo(council, { foreignKey: 'name' });
council.hasMany(club, { foreignKey: 'name' });

module.exports = {club };