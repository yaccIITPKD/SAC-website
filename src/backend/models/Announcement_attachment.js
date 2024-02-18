const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {Announcement} =  require('./Announcement.js') ;

announcement_attachment  =  sequelize.define('announcement_attachment', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    announcement_id  :{
        type :DataTypes.INTEGER ,
        allowNull : false ,
        
    },
    file_name  :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    file_path :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
});

announcement_attachment.belongsTo(Announcement, { foreignKey: 'announcement_id' });
Announcement.hasOne(announcement_attachment, { foreignKey: 'announcement_id' });

module.exports = { announcement_attachment };