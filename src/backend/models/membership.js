const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {user} =  require('./user.js') ;
const {club} =  require('./club.js') ;

membership =  sequelize.define('membership', {
    user_id :{
        type : DataTypes.INTEGER ,
    },
    club_id   :{
        type :DataTypes.INTEGER ,
        
    },
    joined_at :{
        type :DataTypes.DATE ,
        defaultValue  : DataTypes.NOW
    }
},
{
    indexes :[ {
        unique : true ,
        fields: ['user_id', 'club_id'],
        primaryKey : true 
    }]

});

membership.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(membership, { foreignKey: 'user_id' });

membership.belongsTo(club, { foreignKey: 'club_id' });
club.hasMany(membership, { foreignKey: 'club_id' });

module.exports = {membership};