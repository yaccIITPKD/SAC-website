const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {user} =  require('./user.js') ;
const {club} =  require('./club.js') ;

thread = sequelize.define('thread', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    title  :{
        type :DataTypes.TEXT ,
        allowNull : false ,
    },
    content :{
        type :DataTypes.TEXT ,
        allowNull : false ,
        
    },
    club_id :{
        type :DataTypes.INTEGER ,
    },
    user_id :{
        type :DataTypes.INTEGER ,
      
    },
    created_at :{
        type :DataTypes.DATE ,
        defaultValue  : DataTypes.NOW
    },
    likes : {
        type :DataTypes.INTEGER ,
        defaultValue  : 0
    }

});

thread.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(thread, { foreignKey: 'user_id' });

thread.belongsTo(club, { foreignKey: 'club_id' });
club.hasMany(thread, { foreignKey: 'club_id' });

module.exports = {thread};