const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;

Announcement = sequelize.define('Announcement', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    title :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    content :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    created_at:{
        type :DataTypes.DATE ,
        allowNull : false 
    },
    updated_at :{
        type :DataTypes.DATE ,
        allowNull : false 
    }

});

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
announcement_attachment.belongsTo(Announcement, { foreignKey: 'id' });
sequelize.sync()   

module.exports = {Announcement, announcement_attachment };