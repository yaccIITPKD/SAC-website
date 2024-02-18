const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./Database.js') ;
const {User} =  require('./User.js') ;
const {Club} =  require('./Club.js') ;

Membership =  sequelize.define('Membership', {
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

Membership.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Membership, { foreignKey: 'user_id' });

Membership.belongsTo(Club, { foreignKey: 'club_id' });
Club.hasMany(Membership, { foreignKey: 'club_id' });

module.exports = {Membership};