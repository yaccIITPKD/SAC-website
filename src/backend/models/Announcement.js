const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {user} =  require('./user.js') ;

//Announcement
Announcement = sequelize.define('Announcement', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    title :{
        type :DataTypes.STRING ,
        allowNull : false ,
    },
    content :{
        type :DataTypes.STRING ,
        allowNull : false ,
    },
    user_id :{
        type : DataTypes.INTEGER,
        allowNull : false ,
    },
    created_at:{
        type :DataTypes.DATE ,
        defaultValue  : DataTypes.NOW,
        allowNull : false ,
        
    },
    updated_at :{
        type :DataTypes.DATE ,
        defaultValue  : DataTypes.NOW ,
        allowNull : false ,
    }

});

Announcement.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(Announcement, { foreignKey: 'user_id' });

module.exports = {Announcement};